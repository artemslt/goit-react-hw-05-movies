import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li`
  display: flex;
  gap: 16px;
  padding: 4px;
  overflow: hidden;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.41);
`;

export const List = styled.ul`
  display: grid;
  gap: 8px;
`;

export const ItemImg = styled.img`
  width: 240px;
  :hover,
  :focus {
    scale: 1.1;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DetailsLink = styled(NavLink)`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  color: white;
  background-color: orangered;
  :hover,
  :focus {
    scale: 1.1;
  }
`;
