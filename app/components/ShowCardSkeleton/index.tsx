import MaskedView from '@react-native-masked-view/masked-view';
import React, {ReactElement, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
// import {Icons} from '../../assets';
import {Colors, scale, verticalScale} from '../../themes';
import {styles} from './styles';
import {LayoutProps, LoaderStyleProps, SkeletonLoaderProps} from './types';

const SkeletonLoader = ({
  children,
  backgroundColor,
  highlightColor,
}: SkeletonLoaderProps): ReactElement => {
  const [layout, setLayout] = useState<LayoutProps>();
  const shared = useSharedValue(0);

  useEffect(() => {
    shared.value = withRepeat(withTiming(1, {duration: 900}), Infinity);
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          shared.value,
          [0, 1],
          [layout ? -layout.width : 0, layout ? layout.width : 0],
        ),
      },
    ],
  }));

  const skeletonHighlight = (highlight?: string) => {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: highlight || '#9c9c9c'},
        ]}
      />
    );
  };

  if (!layout?.width && !layout?.height) {
    return (
      <View onLayout={event => setLayout(event?.nativeEvent?.layout)}>
        {children}
      </View>
    );
  }

  return (
    <MaskedView
      style={{height: layout?.height, width: layout?.width}}
      maskElement={<View>{children}</View>}>
      <View
        style={[
          styles.background,
          {backgroundColor: backgroundColor || Colors.skeletonBackground},
        ]}
      />
      <Reanimated.View style={[animatedStyles, StyleSheet.absoluteFill]}>
        <MaskedView
          style={StyleSheet.absoluteFill}
          maskElement={
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={StyleSheet.absoluteFill}
              colors={[Colors.transparent, Colors.black, Colors.transparent]}
            />
          }>
          {skeletonHighlight(highlightColor)}
        </MaskedView>
      </Reanimated.View>
    </MaskedView>
  );
};

const Loader = ({style}: LoaderStyleProps) => {
  return <View style={[style ? style : styles.loaderSize, styles.loader]} />;
};

const dateAndShareSkeleton = () => (
  <View style={styles.dateAndShareContainer}>
    <Loader style={styles.usernameSkeleton} />
    <Loader style={styles.shareIconSkeleton} />
  </View>
);

export const SkeletonCard = () => (
  <SkeletonLoader>
    <Loader style={styles.messageSkeleton} />
    <View style={{height: verticalScale(5)}}></View>
    <Loader
      style={{
        height: verticalScale(8),
        width: '90%',
        borderRadius: 10,
      }}
    />
    <View style={{height: verticalScale(4)}}></View>
    <Loader
      style={{
        height: verticalScale(8),
        width: '70%',
        borderRadius: 6,
      }}
    />
    <View style={{height: verticalScale(4)}}></View>
    <Loader
      style={{
        height: verticalScale(8),
        width: '80%',
        borderRadius: 6,
      }}
    />
  </SkeletonLoader>
);

export const SearchBarSkeleton = () => (
  <SkeletonLoader backgroundColor={Colors.discoverSkeletonCard}>
    <View style={styles.searchSkeletonContainer}>
      <Loader style={styles.searchSkeleton} />
      <View style={styles.searchSkeletonIconContainer}>
        {/* <Image source={Icons.seeAllIcon} style={styles.showSubHeaderStyles} /> */}
      </View>
    </View>
  </SkeletonLoader>
);

export const HomeScreenShowSkeleton = () => (
  <View>
    <View style={styles.skeletonCardRow}>
      <SkeletonCard />
      <View style={{width: 26}}></View>
      <SkeletonCard />
      <View style={{width: 26}}></View>
      <SkeletonCard />
    </View>
  </View>
);
