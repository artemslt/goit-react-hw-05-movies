import styled from 'styled-components';

export const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  gap: 8px;
  padding: 4px;
  text-align: center;
  align-items: center;

  color: white;
  opacity: 0;
  transform: translateY(100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 16px;
`;

export const Thumb = styled.div`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';

    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    transform: translateY(100%);
    opacity: 0;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 16px;

  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.41);

  &:hover ${Thumb}:before, &:hover ${InfoWrapper} {
    opacity: 1;
    transform: translateY(0);
  }
`;
