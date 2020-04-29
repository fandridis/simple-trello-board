import React, { useState } from "react";
import styled from "styled-components";
import { Cross } from '@styled-icons/entypo/Cross';
import { __COLORS, } from "../layout/Theme";
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";

/**
 * TYPES
 */
type BoardListItemProps = {
  title: string,
  onDelete: () => {},
}

type StyledItemTextProps = {
  textColor: string,
}

/**
 * STYLES
 */
const StyledBoardListItem = styled.div<StyledItemTextProps>`
  position: relative;
  height: 100%;
  padding: 20px 33px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    overflow: auto;
    color: ${p => p.textColor};
    font-size: 18px;
    font-weight: 600;
  }

  > div {
    position: absolute;
    top: 4px;
    right: 4px;
  }

  ${EXTRA_SMALL_DEVICES`
    padding: 12px 24px 12px 12px;

    > span {
      font-size: 14px;
      font-weight: 400;
    }

    > div {
      top: 0px;
      right: 0px;
    }
   `};
`;

const StyledCross = styled(Cross)`
  color: gray;
  cursor: pointer;
  transition: color 150ms ease;

  &:hover {
    color: black;
  }
`;

/**
 * COMPONENT
 */
export const BoardListItem = ({ title, onDelete }: BoardListItemProps) => {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <StyledBoardListItem
      textColor={__COLORS.PRIMARY}
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      onFocus={() => setShowDelete(true)}
      onBlur={() => setShowDelete(false)}
    >
      <span>
        {title}
      </span>
      <div>
        {showDelete && <StyledCross size={28} onClick={onDelete} />}
      </div>
    </StyledBoardListItem>

  )
};

export default BoardListItem;
