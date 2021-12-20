import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding-left: 10px;
  margin: 10px 0;
`;

export const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  svg {
    display: block;
  }
`;

export const HeaderInner = styled.div`
  padding: 5px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  ${({ hasChildren }) => {
    if (hasChildren) {
      return css`
        &:hover {
          cursor: pointer;
        }
      `;
    }
  }}
`;

export const Label = styled.p`
  margin-right: 15px;
`;

export const Button = styled.button`
  -webkit-appearance: button;
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;

  &:hover {
    cursor: pointer;
  }
`;

export const AddButton = styled.div`
  margin-left: 15px;
`;
