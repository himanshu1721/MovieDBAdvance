import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPopular} from '../../../features/content/popularSlice';
import {fetchPopularTV} from '../../../features/content/popularTVSlice';
import {fetchTrending} from '../../../features/content/trendingSlice';

export const useGetData = () => {
  const popularData = useSelector(state => state.popular.popular);
  const popularTVData = useSelector(state => state.popularTV.popularTV);
  const trendingData = useSelector(state => state.trending.trending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopular({page: 1}));
    dispatch(fetchTrending({page: 1}));
    dispatch(fetchPopularTV({page: 1}));
  }, [dispatch]);

  return {popularData, popularTVData, trendingData};
};
