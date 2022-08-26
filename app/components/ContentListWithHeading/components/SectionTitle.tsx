import React from 'react';
import { Text } from 'react-native';
import styles from '../styles/SectionTitleStyles';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <Text style={styles.titleStyle}>{title}</Text>;
};

export default SectionTitle;
