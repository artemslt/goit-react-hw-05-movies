import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieReviews } from '../../API/api';
import { List, Item } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetMovieReviews(id)
      .then(res => {
        setReviews(res.results);
        console.log(res.results);
      })
      .catch(err => console.log('err', err));
  }, [id]);
  console.log('reviews', reviews);

  return (
    <div>
      <List>
        {reviews.map(actor => {
          return (
            <Item key={actor.id}>
              <h3>{actor.author}</h3>
              <p>{actor.content}</p>
            </Item>
          );
        })}
      </List>
    </div>
  );
};
