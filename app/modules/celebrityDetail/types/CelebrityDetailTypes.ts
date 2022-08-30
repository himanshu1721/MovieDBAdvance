import { ImageSourcePropType } from 'react-native';

export interface PersonalDetailsProps {
  image_path: ImageSourcePropType;
  label: string;
}

export interface ProfileProps {
  item: {
    aspect_ratio: number;
    height: number;
    width: number;
    iso_639_1: string | null;
    file_path: string;
    vote_average: number;
    vote_count: number;
  };
}
