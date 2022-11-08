import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GetMovieDetails } from '../API/api';
import { MovieCard } from '../components/MovieCard/MovieCard';
import { LinkButton } from '../components/LinkButton/LinkButton';
import { Loader } from '../components/Loader/Loader';
import { errorMessage } from '../components/helpers/Messages';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setStatus(Status.PENDING);

    GetMovieDetails(id)
      .then(res => {
        setMovie(res);
      })
      .catch(() => {
        setStatus(Status.REJECTED);
        errorMessage();
      })
      .finally(setStatus(Status.RESOLVED));
  }, [id]);

  return (
    <main>
      <LinkButton to={backLinkHref}>Back</LinkButton>
      {status === Status.PENDING && <Loader isLoading={true} />}
      <MovieCard
        poster_path={movie.poster_path}
        title={movie.title}
        vote_average={movie.vote_average}
        overview={movie.overview}
        genres={movie.genres}
        release_date={movie.release_date}
      />
      <ToastContainer />
      <Suspense fallback={<Loader isLoading={true} />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
