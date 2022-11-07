import styled from 'styled-components';

export const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: grid;

  text-align: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  opacity: 0;
`;

export const ListItem = styled.li`
  position: relative;
  overflow: hidden;

  display: flex;
  gap: 16px;

  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.41);

  &:hover ${InfoWrapper} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
`;

