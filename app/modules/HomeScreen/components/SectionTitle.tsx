import React from "react";
import { Text } from "react-native";
import styles from './SectionTitleStyles';

interface SectionTitleProps {
  isTrailer?: boolean;
  title: string;
}

const SectionTitle = ({ isTrailer, title }: SectionTitleProps) => {
  return (
    <Text style={isTrailer ? styles.titleStyleTrailer : styles.titleStyle}>
      {title}
    </Text>
  );
};

export default SectionTitle;
