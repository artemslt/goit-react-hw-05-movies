import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieCast } from '../../API/api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetMovieCast(id)
      .then(res => {
        setCast(res.cast);
        console.log(res.cast);
      })
      .catch(err => console.log('err', err));
  }, [id]);

  return (
    <div>
      <ul>
        {cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
                alt=""
              />
              <p>{actor.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
