import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import HeaderTitle from '../../components/HeaderTitle';
import { useCurrentUserDetails } from '../../hooks/useCurrentUID';
import CustomHeader from '../movieDetails/components/Header';
import UserCard from './components/UserCard';
import styles from './styles/CommunityStyles';

const Community = ({ navigation }) => {
  const [allUsers, setAllUsers] = useState([]);
  const { currentUserUID } = useCurrentUserDetails();

  const getAllUsers = async () => {
    const snapshot = await firestore()
      .collection('users')
      .where('uid', '!=', currentUserUID)
      .get();
    const allAppUsers = snapshot.docs.map(doc => doc.data());
    setAllUsers(allAppUsers);
  };

  useEffect(() => {
    getAllUsers();
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <CustomHeader
            renderMiddle={<HeaderTitle title={'Community'} />}
            renderIcon={
              <DrawerIconComponent onTap={() => navigation.openDrawer()} />
            }
            backButton={false}
          />
          <FlatList
            style={styles.flatListStyles}
            data={allUsers}
            renderItem={({ item }) => {
              return <UserCard item={item} />;
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Community;
