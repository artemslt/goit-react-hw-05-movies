import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imageNotFaund from '../helpers/images/imgNotFound.jpg';
import { GetMovieCast } from '../../API/api';
import { List, Item, ArtistName } from './Cast.styled';
import { notFindMessage, errorMessage } from '../helpers/Messages';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetMovieCast(id)
      .then(res => {
        if (res.cast.length === 0) {
          notFindMessage();
          return;
        }
        setCast(res.cast);
      })
      .catch(() => errorMessage());
  }, [id]);

  return (
    <div>
      <List>
        {cast.map(actor => {
          return (
            <Item key={actor.id}>
              <img
                src={
                  actor.profile_path === null
                    ? imageNotFaund
                    : `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                }
                alt=""
              />
              <ArtistName>{actor.name}</ArtistName>
            </Item>
          );
        })}
      </List>
      <ToastContainer />
    </div>
  );
};

export default Cast;
