import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {
  convertMinsToHrsMins,
  returnDateMMDDYYYY,
} from '../../../services/TimeUtils';
import Strings from '../../../constants/Strings';
import styles from '../styles/ReleaseDateStyles';

interface ReleaseDateAndRuntimeType {
  releaseDate: string;
  runTime: number;
}

const ReleaseDateAndRuntime = ({
  releaseDate,
  runTime,
}: ReleaseDateAndRuntimeType): JSX.Element => {
  const getReleaseDate = useMemo(
    () => returnDateMMDDYYYY(releaseDate),
    [releaseDate],
  );

  const getRuntime = useMemo(() => convertMinsToHrsMins(runTime), [runTime]);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.ratedContainer}>
          <Text style={styles.ratedTextStyles}>{Strings.nr}</Text>
        </View>
        <Text style={styles.dateStyles}>
          {getReleaseDate} ({Strings.us})
        </Text>
        {runTime && (
          <Text style={styles.dateStyles}>
            {Strings.dotChar}
            {getRuntime}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ReleaseDateAndRuntime;
