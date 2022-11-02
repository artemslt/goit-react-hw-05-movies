import { searchMovies } from '../API/api';
import { useSearchParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { SearchForm } from '../components/SearchForm/SearchForm';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesQuary = searchParams.get('query') ?? '';

  useEffect(() => {
    if (moviesQuary === '') {
      return;
    }
    searchMovies(moviesQuary)
      .then(res => {
        setMovies(res.results);
        console.log('movies', res.results);
      })
      .catch(err => {
        console.log('err :>> ', err);
      });
  }, [moviesQuary]);

  const handlQuery = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.search.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchForm handlQuery={handlQuery} />
      <MoviesList movies={movies} />
    </main>
  );
};
