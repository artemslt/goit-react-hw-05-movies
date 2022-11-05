import {
  InfoWrapper,
  Poster,
  Wrapper,
  AdditionalInfoWrapper,
} from './MovieCard.styled';
import { Link } from 'react-router-dom';
import { LinkButton } from '../LinkButton/LinkButton';

export const MovieCard = ({
  movie: { title, poster_path, vote_average, overview, genres, release_date },
}) => {
  const ratingNormalize = value => {
    const rating = value * 10;
    return rating.toFixed(1) + '%';
  };

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
              <LinkButton to="cast">Cast</LinkButton>
            </li>
            <li>
              <LinkButton to="reviews">Reviews</LinkButton>
            </li>
          </AdditionalInfoWrapper>
        </div>
      </InfoWrapper>
    </Wrapper>
  );
};
