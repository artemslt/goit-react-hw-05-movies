import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { GetMovieReviews } from '../../API/api';
import { List, Item } from './Reviews.styled';
import { notFindMessage, errorMessage } from '../helpers/Messages';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    GetMovieReviews(id)
      .then(res => {
        if (res.results.length === 0) {
          notFindMessage();
          return;
        }
        setReviews(res.results);
      })
      .catch(() => errorMessage());
  }, [id]);

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
      <ToastContainer />
    </div>
  );
};

export default Reviews;
