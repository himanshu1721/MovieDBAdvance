import { useSelector } from 'react-redux';

export const useGetLoading = () => {
  const trendingLoading = useSelector(state => state?.trending?.loading);
  const popularTVLoading = useSelector(state => state?.popularTV.loading);
  const popularLoading = useSelector(state => state?.popular?.loading);

  return { trendingLoading, popularTVLoading, popularLoading };
};
