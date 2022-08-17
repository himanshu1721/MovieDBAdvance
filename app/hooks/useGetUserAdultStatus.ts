import { useSelector } from 'react-redux';

export const useGetUserAdultStatus = () => {
  const isCurrentUserAdult = useSelector(state => state.profile.isAdult);

  return { isCurrentUserAdult };
};
