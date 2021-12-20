import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding-left: 10px;
  margin: 10px 0;

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

export const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderInner = styled.div`
  margin-right: 20px;
`;

export const Label = styled.p`
  font-size: 16px;
`;

export const Children = styled.div``;
