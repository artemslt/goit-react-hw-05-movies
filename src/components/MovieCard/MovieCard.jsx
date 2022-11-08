import PropTypes from 'prop-types';

import {
  InfoWrapper,
  Poster,
  Wrapper,
  AdditionalInfoWrapper,
} from './MovieCard.styled';
import { LinkButton } from '../LinkButton/LinkButton';

export const MovieCard = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
  release_date,
  location,
}) => {
  const ratingNormalize = value => {
    const rating = value * 10;
    return rating.toFixed(1) + '%';
  };

  console.log('location', location);
  return (
    <Wrapper>
      <Poster src={'https://image.tmdb.org/t/p/w500' + poster_path} alt="" />
      <InfoWrapper>
        <h2>{title}</h2>
        <p>user score: {ratingNormalize(vote_average)}</p>
        <h3>Release date</h3>
        <p>{release_date}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres?.map(genre => genre.name).join(' ')}</p>
        <div>
          <h4>Additional information</h4>
          <AdditionalInfoWrapper>
            <li>
              <LinkButton to="cast" from={location}>
                Cast
              </LinkButton>
            </li>
            <li>
              <LinkButton to="reviews" from={location}>
                Reviews
              </LinkButton>
            </li>
          </AdditionalInfoWrapper>
        </div>
      </InfoWrapper>
    </Wrapper>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  release_date: PropTypes.string,
};
