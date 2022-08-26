import React from 'react';
import { View } from 'react-native';
import { HomeScreenShowSkeleton } from '../ShowCardSkeleton';
import SectionTitle from './components/SectionTitle';
import styles from './styles/ContentListWithHeadingStyles';

interface ContentListWithHeadingProps {
  loading: boolean;
  heading: string;
  children: JSX.Element;
}

const ContentListWithHeading = ({
  loading,
  heading,
  children,
}: ContentListWithHeadingProps): JSX.Element => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionTitleContainer}>
        <SectionTitle title={heading} />
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <HomeScreenShowSkeleton />
        </View>
      ) : (
        { ...children }
      )}
    </View>
  );
};

export default ContentListWithHeading;
