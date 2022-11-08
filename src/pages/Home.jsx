import { trendMovies } from '../API/api';

import { useState, useEffect } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Loader } from '../components/Loader/Loader';
import { errorMessage } from '../components/helpers/Messages';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    setStatus(Status.PENDING);

    trendMovies()
      .then(res => {
        setTrends(res.results);
      })
      .catch(() => {
        setStatus(Status.REJECTED);
        errorMessage();
      })
      .finally(setStatus(Status.RESOLVED));
  }, []);

  return (
    <main>
      {status === Status.PENDING && <Loader isLoading={true} />}
      <MoviesList movies={trends} />
    </main>
  );
};

export default Home;
