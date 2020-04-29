import React from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';
// import { __ALERTS, __COLORS, __GRAY_SCALE } from "../layout/Theme";
import { Todo } from '../model/Todo';
import { deleteTodo } from '../reducers/todos/actions';
import BoardListItem from './BoardListItem';
import AddTask from './AddTask';
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";

/**
 * TYPES
 */
type BoardListProps = {
  title: string,
  droppableId: string,
  items: Todo[],
  headerColor: string,
  icon: any
}

type StyledBoardListHeaderProps = {
  headerColor: string,
}

/**
 * STYLES
 */
const StyledBoardListContainer = styled.div`
width: 50%;
`;

const StyledBoardListHeader = styled.div<StyledBoardListHeaderProps>`
  display: flex;
  padding: 16px 16px 16px 24px;
  align-items: center;
  background: ${p => p.headerColor};
  color: white;
  font-weight: 600;
  text-align: center;

  span {
    margin-left: 16px;
    font-size: 1.4rem;
    text-align: end;
    transform: translateY(2px);
  }

  span:nth-child(3) {
    flex: 1;
    margin: 0px 8px;
  }

  ${EXTRA_SMALL_DEVICES`
    padding: 8px;

    span {
      margin-left: 8px;
      font-size: 0.8rem;
    }

    svg {
      height: 22px;
      width: 22px;
    }
   `};
`;

/**
 * HELPER FUNCTIONS
 */
function getItemStyle(snapshot: any, style: any) {
  const commonStyle = {
    display: snapshot.isDragging ? 'flex' : 'block',
    alignItems: 'center',
    margin: `0 0 16px 0`,
    background: '#ebebeb',
    border: snapshot.isDragging ? '2px solid gray' : 'none',
    borderRadius: '8px'
  }

  if (!snapshot.isDragging) return {
    ...commonStyle,
  };

  if (!snapshot.isDropAnimating) {
    return {
      ...commonStyle,
      ...style
    }
  }

  return {
    padding: 16,
    ...style,
    transitionDuration: `0.0001s`
  };
}

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? '#f4f4f9' : 'initial',
  padding: 16,
  height: '100%',
});

/**
 * COMPONENT
 */
export const BoardList = ({ title, droppableId, items, headerColor, icon }: BoardListProps) => {
  const dispatch = useDispatch();

  const handleDelete = async (todo: Todo) => dispatch(deleteTodo(todo));

  return (
    <StyledBoardListContainer>
      <StyledBoardListHeader headerColor={headerColor}>
        {icon}
        <span>{title}</span>
        <span>{items.length}</span>
      </StyledBoardListHeader>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}>
            {items.map((item: any, index: any) => (
              <Draggable
                key={item._id}
                draggableId={item._id}
                index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot,
                      provided.draggableProps.style
                    )}>
                    <BoardListItem title={item.title} onDelete={() => handleDelete(item)} />
                  </div>
                )}
              </Draggable>
            ))}
            <span style={{ display: "none" }}>
              {provided.placeholder}
            </span>
            <AddTask isCompleted={droppableId === 'droppable2'} />
          </div>
        )}
      </Droppable>
    </StyledBoardListContainer>

  )
};

export default BoardList;
