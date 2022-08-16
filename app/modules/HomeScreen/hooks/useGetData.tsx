import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularTV } from '../../../features/content/popularTVSlice';
import { fetchPopular } from '../../../features/content/services';
import { fetchTrending } from '../../../features/content/trendingSlice';
import { useGetUserAdultStatus } from '../../../hooks/useGetUserAdultStatus';

export const useGetData = () => {
  const popularData = useSelector(state => state.popular.popular);
  const popularTVData = useSelector(state => state.popularTV.popularTV);
  const trendingData = useSelector(state => state.trending.trending);
  const { isCurrentUserAdult } = useGetUserAdultStatus();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopular({ page: 1, isCurrentUserAdult }));
    dispatch(fetchTrending({ page: 1, isCurrentUserAdult }));
    dispatch(fetchPopularTV({ page: 1, isCurrentUserAdult }));
  }, [dispatch]);

  return { popularData, popularTVData, trendingData };
};
