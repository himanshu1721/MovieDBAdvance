import Strings from '../constants/Strings';
interface GenreProp {
  id: number;
  name: string;
}

//returns the genre list from genre object.
export const getGenreList = (
  array: any[] = [{id: 1, name: Strings.streaming}],
): string => {
  return array
    .map((x: GenreProp) => x.name)
    .join(Strings.commaWithLeadingSpace);
};
