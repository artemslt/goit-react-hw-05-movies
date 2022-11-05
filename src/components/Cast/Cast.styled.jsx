import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;

export const Item = styled.li`
  text-align: center;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`;

export const ArtistName = styled.p`
  font-size: 500;
  padding: 4px 0;
`;
