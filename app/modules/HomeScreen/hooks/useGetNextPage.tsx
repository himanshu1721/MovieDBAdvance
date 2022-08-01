import {useSelector} from 'react-redux';

export const useGetNextPage = () => {
  const nextPagePopular = useSelector(state => state?.popular?.nextPage);
  const nextPagePopularTV = useSelector(state => state?.popularTV?.nextPage);
  const nextPageTrending = useSelector(state => state?.trending?.nextPage);

  return {nextPagePopular, nextPagePopularTV, nextPageTrending};
};
