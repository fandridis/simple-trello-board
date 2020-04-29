import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { Task } from '@styled-icons/boxicons-regular/Task';
import { CheckShield } from '@styled-icons/boxicons-solid/CheckShield';
import { __COLORS } from "../layout/Theme";
import { Todo } from '../model/Todo';
import { fetchTodos, toggleTodo, } from '../reducers/todos/actions';
import { DragDropContext } from 'react-beautiful-dnd';
import BoardList from './BoardList';
import { Spinner } from '../layout/UI/Spinners/Spinner';

/**
 * STYLES
 */
const StyledBoardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 2%;
  height: 100%;

  display: flex;
  justify-content: center;
`;

/**
 * HELPER FUNCTIONS
 */
const move = (source: any, destination: any, droppableSource: any, droppableDestination: any) => {
  let sourceClone = Array.from(source);
  let destClone = Array.from(destination);
  let [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone = [...destClone, removed]

  const result: any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};


const id2List: any = {
  droppable: 'items',
  droppable2: 'selected'
};

/**
 * COMPONENT
 */
export const AxelraTrello = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state: any) => state.todos);

  const [todoState, setTodoState] = useState<any>({
    items: [],
    selected: []
  })

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  useEffect(() => {
    setTodoState({
      items: todos.filter((todo: Todo) => !todo.completed),
      selected: todos.filter((todo: Todo) => todo.completed)
    })
  }, [todos.length])


  const getList = (id: any) => {
    return todoState[id2List[id]];
  }

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination || (source.droppableId === destination.droppableId)) {
      // Ignore if dropped outside any of the lists or on the same list
      return;
    } else {
      const updatedLists = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      );

      // Update the redux state and db
      const todoToToggle = getList(source.droppableId).find((todo: Todo) => todo._id === result.draggableId);
      dispatch(toggleTodo(todoToToggle))

      // Update the local state
      setTodoState({
        items: updatedLists.droppable,
        selected: updatedLists.droppable2
      });
    }
  };

  if (loading) {
    return (
      <StyledBoardContainer>
        <Spinner color={__COLORS.PRIMARY} />
      </StyledBoardContainer>
    )
  }

  return (
    <StyledBoardContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <BoardList title="IN PROGRESS" icon={<Task size={32} />} headerColor="#e76f51" droppableId="droppable" items={todoState.items} />
        <BoardList title="COMPLETED" icon={<CheckShield size={32} />} headerColor="#2a9d8f" droppableId="droppable2" items={todoState.selected} />
      </DragDropContext>
    </StyledBoardContainer>
  )
};

export default AxelraTrello;
