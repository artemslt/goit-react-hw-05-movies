import { Link, useLocation } from 'react-router-dom';
import imageNotFaund from '../helpers/images/imgNotFound.jpg';

import {
  List,
  ListItem,
  InfoWrapper,
  
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(({ id, title, backdrop_path, poster_path, overview }) => {
          return (
            <ListItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    poster_path === null
                      ? imageNotFaund
                      : `https://image.tmdb.org/t/p/w500${poster_path}`
                  }
                  alt={title}
                />
                <InfoWrapper>
                  <h3>{title}</h3>
                  <p>{overview}</p>
                </InfoWrapper>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
