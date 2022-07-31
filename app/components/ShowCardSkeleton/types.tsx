import {ReactElement} from 'react';
import {ViewStyle} from 'react-native';

export interface SkeletonLoaderProps {
  children: ReactElement;
  backgroundColor?: string;
  highlightColor?: string;
}

export interface LoaderStyleProps {
  style: ViewStyle;
}

export interface LayoutProps {
  height: number;
  width: number;
  x: number;
  y: number;
}
