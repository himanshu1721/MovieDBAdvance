import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/SectionTitleStyles';
import { SectionTitleProps } from '../types';

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <Text style={styles.titleStyle}>{title}</Text>;
};

export default SectionTitle;
