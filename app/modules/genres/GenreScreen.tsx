import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import HeaderTitle from '../../components/HeaderTitle';
import { Strings } from '../../constants';
import { genresList } from '../../constants/StaticData';
import CustomHeader from '../movieDetails/components/Header';
import GenreCard from './components/GenreCard';
import styles from './styles/GenreScreenStyles';

const GenreScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          renderMiddle={<HeaderTitle title={Strings.genres} />}
          renderIcon={
            <DrawerIconComponent onTap={() => navigation.openDrawer()} />
          }
          backButton={false}
        />
        <View style={styles.genresContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyExtractor={item => String(item?.id)}
            numColumns={2}
            renderItem={({ item }) => <GenreCard item={item} />}
            data={genresList}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default GenreScreen;
