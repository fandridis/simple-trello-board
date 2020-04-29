import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { createTodo } from '../reducers/todos/actions';
import { AddCircleOutline } from '@styled-icons/material-outlined/AddCircleOutline';
import { __COLORS } from "../layout/Theme";
import useOnClickOutside from '../helpers/useOnClickOutside';
import SmallSpinner from '../layout/UI/Spinners/SmallSpinner';

/**
 * TYPES
 */
type AddTaskProps = {
  isCompleted: boolean
}

/**
 * STYLES
 */
const StyledAddTaskContainer = styled.div`
  height: 50px;
  margin: 0 0 16px 0;
  background: #fbfbfb;
  border: 1px solid gray;
  border-radius: 8px;
`;

const StyledIconWrapper = styled.div`
  width: 100%;
  padding: 2px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 93%;
  height: 48px;
  padding: 0px 16px;
  background: transparent;
  border: 0px solid;
  outline: none;
  font-size: 18px;
  color: #333;
`;

const StyledLoaderWrapper = styled.div`
  height: 100%;
  padding: 0px 16px;
  display: flex;
  align-items: center;
`;

const StyledAddCircleOutline = styled(AddCircleOutline)`
  color: gray;
  cursor: pointer;
  transition: color 200ms ease;

  &:hover {
    color: black;
  }
`

/**
 * COMPONENT
 */
export const AddTask = ({ isCompleted }: AddTaskProps) => {
  const dispatch = useDispatch();
  const { createLoading } = useSelector((state: any) => state.todos);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState(false);

  useOnClickOutside(inputRef, () => {
    setIsActive(false);
  });

  useEffect(() => {
    isActive && inputRef.current && inputRef.current.focus();
  }, [isActive])

  const handleActivate = () => setIsActive(true);

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && inputRef.current) {
      dispatch(createTodo(inputRef.current.value, isCompleted));
      inputRef.current.value = '';
    }
  }

  if (isActive) {
    return (
      <StyledAddTaskContainer>
        {createLoading ?
          (
            <div style={{ height: '100%', padding: '0px 16px', display: 'flex', alignItems: 'center' }}>
              <SmallSpinner />
            </div>
          ) : (
            <StyledInput
              ref={inputRef}
              onKeyDown={handleKeyDown}
              placeholder="Add text..."
            />
          )
        }
      </StyledAddTaskContainer>
    )
  }

  return (
    <StyledIconWrapper onClick={handleActivate}>
      <StyledAddCircleOutline size={42} />
    </StyledIconWrapper>

  )
};

export default AddTask;
