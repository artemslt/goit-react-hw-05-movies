import { trendMovies } from '../API/api';

import { useState, useEffect } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';

export const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    trendMovies()
      .then(res => {
        setTrends(res.results);
        console.log('movies', res.results);
      })
      .catch(err => {
        console.log('err :>> ', err);
      });
  }, []);

  return (
    <main>
      <MoviesList movies={trends} />
    </main>
  );
};
