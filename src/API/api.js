import axios from 'axios';
import { errorMessage } from '../components/helpers/Messages';

const API_KEY = '93d454aeb43c6f394ac0bb2f4b913efd';
const BASE_URL = 'https://api.themoviedb.org/3';

export const moviedbApi = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY, page: '1' },
});

export async function trendMovies(page) {
  try {
    const res = await moviedbApi.get('/trending/movie/week', {
      params: { page: page },
    });

    return res.data;
  } catch (error) {
    errorMessage();
  }
}

export async function searchMovies(searchQuery, page) {
  try {
    const res = await moviedbApi.get('/search/movie', {
      params: { query: searchQuery, page: page },
    });
    return res.data;
  } catch (error) {
    errorMessage();
  }
}

export async function GetMovieDetails(id) {
  try {
    const res = await moviedbApi.get(`/movie/${id}`);
    return res.data;
  } catch (error) {
    errorMessage();
  }
}

export async function GetMovieCast(id) {
  try {
    const res = await moviedbApi.get(`/movie/${id}/credits`);
    return res.data;
  } catch (error) {
    errorMessage();
  }
}

export async function GetMovieReviews(id) {
  try {
    const res = await moviedbApi.get(`/movie/${id}/reviews`);
    return res.data;
  } catch (error) {
    errorMessage();
  }
}
