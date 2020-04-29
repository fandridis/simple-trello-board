import React from "react";
import styled from "styled-components";
import Board from './Board';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AxelraTrello = () => {
  return (
    <StyledWrapper>
      <Board />
    </StyledWrapper>
  )
};

export default AxelraTrello;
