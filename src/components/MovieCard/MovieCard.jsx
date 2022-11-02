import { InfoWrapper, Poster, Wrapper } from './MovieCard.styled';
import { Link } from 'react-router-dom';

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
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      </InfoWrapper>
    </Wrapper>
  );
};
