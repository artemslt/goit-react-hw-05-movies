import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieCast } from '../../API/api';
import { List, Item, ArtistName } from './Cast.styled';

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
  console.log('cast', cast);
  return (
    <div>
      <List>
        {cast.map(actor => {
          return (
            <Item key={actor.id}>
              <img
                src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
                alt=""
              />
              <ArtistName>{actor.name}</ArtistName>
            </Item>
          );
        })}
      </List>
    </div>
  );
};
