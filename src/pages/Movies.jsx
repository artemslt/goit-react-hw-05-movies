import { searchMovies } from '../API/api';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MoviesList } from '../components/MoviesList/MoviesList';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { Loader } from '../components/Loader/Loader';
import { LoadMoreBtn } from '../components/LoadMoreBtn/LoadMoreBtn.styled';
import {
  findMessage,
  notFindMessage,
  errorMessage,
  noQueryMessage,
} from '../components/helpers/Messages';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const moviesQuary = searchParams.get('query') ?? '';

  useEffect(() => {
    if (moviesQuary === '') {
      return;
    }
    if (searchParams && status === Status.IDLE) {
      setStatus(Status.PENDING);
      searchMovies(moviesQuary, page)
        .then(res => {
          if (res.results.totalHits === 0) {
            notFindMessage();
          }
          setMovies([...movies, ...res.results]);
          findMessage(res.total_results);
          setTotalPages(Math.ceil(res.total_results / 20));

          console.log('movies', res);
        })
        .catch(() => {
          setStatus(Status.REJECTED);
          errorMessage();
        })
        .finally(setStatus(Status.RESOLVED));
    }
  }, [movies, moviesQuary, page, searchParams, status]);

  const handlQuery = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.search.value;
    if (query === '') {
      noQueryMessage();
      return;
    }
    if (query === moviesQuary) {
      noQueryMessage();
      return;
    }

    const nextParams = query !== '' ? { query } : {};

    setSearchParams(nextParams);
    setPage(1);
    setTotalPages(1);
    setMovies([]);
    setStatus(Status.IDLE);
    e.target.reset();
  };

  const loadMore = () => {
    setPage(page + 1);
    setStatus(Status.IDLE);
  };

  return (
    <main>
      <SearchForm handlQuery={handlQuery} />
      {status === Status.PENDING && <Loader isLoading={true} />}
      {searchParams && <MoviesList movies={movies} />}
      {totalPages !== 0 && page !== totalPages && (
        <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
      )}
      <ToastContainer />
    </main>
  );
};
