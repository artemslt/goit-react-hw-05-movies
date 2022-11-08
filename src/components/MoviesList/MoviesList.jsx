import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import imageNotFaund from '../helpers/images/imgNotFound.jpg';

import { List, ListItem, InfoWrapper, Thumb } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path, overview }) => {
          return (
            <ListItem key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Thumb>
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
                </Thumb>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      overview: PropTypes.string,
    })
  ),
};
