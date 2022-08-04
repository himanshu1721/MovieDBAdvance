import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../../features/detail/detailSlice';

export const useGetMovies = ({ t, id }) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.detail.movieDetails);

  useEffect(() => {
    dispatch(fetchMovie({ type: t, movieID: id }));
  }, [dispatch]);

  return { movies };
};
