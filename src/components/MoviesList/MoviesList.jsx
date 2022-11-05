import { Link, useLocation } from 'react-router-dom';

import {
  List,
  ListItem,
  ItemImg,
  InfoWrapper,
  DetailsLink,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(({ id, title, backdrop_path, overview }) => {
          return (
            <ListItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <ItemImg
                  src={'https://image.tmdb.org/t/p/w500' + backdrop_path}
                  alt={title}
                />
              </Link>
              <InfoWrapper>
                <h3>{title}</h3>
                <p>{overview}</p>
                <DetailsLink to={`/movies/${id}`} state={{ from: location }}>
                  Details
                </DetailsLink>
              </InfoWrapper>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
