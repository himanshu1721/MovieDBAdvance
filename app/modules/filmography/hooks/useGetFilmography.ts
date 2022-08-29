import { useSelector } from 'react-redux';

export const useGetFilmography = () => {
  const films = useSelector(state => state?.filmography?.data);
  const loading = useSelector(state => state?.filmography?.loading);
  const loadMore = useSelector(state => state.filmography.loadMore);

  return { films, loading, loadMore };
};
