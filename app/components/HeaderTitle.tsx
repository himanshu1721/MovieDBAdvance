import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors, moderateScale} from '../themes';

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle = ({title}: HeaderTitleProps): JSX.Element => {
  return <Text style={styles.titleTextStyles}>{title}</Text>;
};

const styles = StyleSheet.create({
  titleTextStyles: {
    fontSize: moderateScale(30),
    fontWeight: '700',
    color: Colors.limeGreen,
  },
});

export default HeaderTitle;
