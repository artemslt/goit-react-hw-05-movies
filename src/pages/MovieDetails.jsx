import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { GetMovieDetails } from '../API/api';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { useLocation } from 'react-router-dom';
import { LinkButton } from '../components/LinkButton/LinkButton';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log('location', location);

  useEffect(() => {
    GetMovieDetails(id)
      .then(res => {
        setMovie(res);
      })
      .catch(err => console.log('err', err));
  }, [id]);

  return (
    <main>
      <LinkButton to={backLinkHref}>Back</LinkButton>
      <MovieCard movie={movie} />
      <Outlet />
    </main>
  );
};
