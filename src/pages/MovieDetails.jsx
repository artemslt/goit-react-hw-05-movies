import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { GetMovieDetails } from '../API/api';
import { MovieCard } from '../components/MovieCard/MovieCard';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    GetMovieDetails(id)
      .then(res => {
        setMovie(res);
      })

      .catch(err => console.log('err', err));
  }, [id]);
  return (
    <main>
      <MovieCard movie={movie} />
      <Outlet />
    </main>
  );
};
