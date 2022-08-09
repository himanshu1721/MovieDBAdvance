import firestore from '@react-native-firebase/firestore';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import GenreCard from '../../components/GenreCard';
import HeaderTitle from '../../components/HeaderTitle';
import AppConstants from '../../constants/AppConstants';
import { updateProfile } from '../../features/profile/profileSlice';
import { useCurrentUserDetails } from '../../hooks/useCurrentUID';
import { convertMinsToHrsMins } from '../../services/TimeUtils';
import { moderateScale } from '../../themes';
import CustomHeader from '../movieDetails/components/Header';
import EditProfile from './components/EditProfileField';
import EmptyFavorite from './components/EmptyFavoriteList';
import styles from './styles/ProfileStyles';

const ProfileScreen = ({ navigation }) => {
  const [threads, setThreads] = useState([]);

  const getUsers = async () => {
    const querySnap = await firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .collection('favorites')
      .get();
    const allusers = querySnap.docs.map(docSnap => docSnap.data());
    setThreads(allusers);
  };

  useEffect(() => {
    getUsers();
  }, [threads]);

  const { currentUserUID, currentUsername } = useCurrentUserDetails();
  const dispatch = useDispatch();

  const name = useSelector(state => state.profile.name);
  const username = useSelector(state => state.profile.username);
  const about = useSelector(state => state.profile.about);

  const getUserProfileDetails = async () => {
    const user = await firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .get();
    dispatch(updateProfile(user.data()));
  };

  const getRuntime = (runTime: number) => convertMinsToHrsMins(runTime);

  useEffect(() => {
    getUserProfileDetails();
  }, []);

  useEffect(() => {
    setCustomName(name);
    setCustomUsername(username);
    setCustomAbout(about);
  }, [name, username, about]);

  const [customName, setCustomName] = useState('a');
  const [customUsername, setCustomUsername] = useState('a');
  const [customAbout, setCustomAbout] = useState('a');

  const [usernameAlreadyTaken, setUsernameAlreadyTaken] = useState(false);

  useEffect(() => {
    setUsernameAlreadyTaken(checkUsername());
  }, [customUsername]);

  const checkUsername = async () => {
    return await checkUsernameValid();
  };

  const checkUsernameValid = async () => {
    const usernameExist = await firestore()
      .collection('users')
      .where('username', '==', customUsername)
      .get();

    if (usernameExist.empty) {
      return true;
    } else if (!usernameExist.empty) {
      return false;
    }
  };

  const updateAbout = async () => {
    if (await checkUsernameValid()) {
      firestore()
        .collection('users')
        .doc(`${currentUserUID}`)
        .set({ username: customUsername }, { merge: true });
    }
    firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .set({ about: customAbout }, { merge: true });
    firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .set({ name: customName }, { merge: true });
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getUserProfileDetails();
      setRefreshing(false);
    }, 1500);
    // wait(2000).then(() => );
  }, []);

  const renderItem = ({ item }) => {
    return <GenreCard genreName={item?.name} />;
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleFav, setModalVisibleFav] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          renderMiddle={<HeaderTitle title={'My Profile'} />}
          renderIcon={
            <DrawerIconComponent onTap={() => navigation.openDrawer()} />
          }
          backButton={false}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              tintColor={'white'}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          bounces={true}>
          <View style={{ height: '10%' }}></View>
          <View style={styles.subContainer}>
            <View style={styles.dpAndNameContainer}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: moderateScale(70),
                  height: moderateScale(70),
                  borderRadius: moderateScale(35),
                }}>
                <SvgUri
                  width={moderateScale(70)}
                  height={moderateScale(70)}
                  uri={`https://avatars.dicebear.com/api/croodles/${currentUsername}20.svg`}
                />
              </View>
              <View style={styles.dpAndInfoSeparator} />
              <View>
                <Text style={styles.nameStyles}>{name}</Text>
                <Text style={styles.usernameStyles}>@{username}</Text>
              </View>
            </View>
            <View style={styles.dpAndAboutSeparator} />
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutStyles}>{about}</Text>
            </View>
            <View style={styles.dpAndAboutSeparator} />
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.8}
              style={styles.editProfileButton}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: '100%' }} />
          <View style={styles.favoritesContainer}>
            <Text style={styles.favoritesText}>Favorites</Text>
            <View style={{ width: 10 }}></View>
            <TouchableOpacity
              style={styles.showFavoriteButton}
              onPress={() => setModalVisibleFav(true)}>
              <Text style={{ fontSize: moderateScale(15) }}>Show favorite</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal
          presentationStyle="pageSheet"
          style={styles.modal}
          // animationType="slide"
          animationType="slide"
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          visible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.closeAndDoneContainer}>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.closeButtonWrapper}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={styles.closeButton}
                />
              </Pressable>
              <View style={styles.extraViewTop} />
              <Pressable
                onPress={async () => {
                  updateAbout();
                  setModalVisible(false);
                }}
                style={styles.closeButtonWrapper}>
                <Image
                  source={require('../../assets/images/tick.png')}
                  style={styles.closeButton}
                />
              </Pressable>
            </View>
            <EditProfile
              maxCharactersAllowed={25}
              currentCount={customName.length}
              value={customName}
              title={'Name'}
              onEditField={(text: string) => setCustomName(text)}
            />
            <View style={{ height: 30 }}></View>
            <EditProfile
              maxCharactersAllowed={15}
              currentCount={customUsername.length}
              value={customUsername}
              title={'Username'}
              onEditField={(text: string) => setCustomUsername(text)}
            />
            <View style={{ height: 30 }}></View>
            <EditProfile
              maxCharactersAllowed={180}
              currentCount={customAbout.length}
              title={'About'}
              value={customAbout}
              onEditField={(text: string) => setCustomAbout(text)}
            />
            <View style={styles.dpAndAboutSeparator} />
            <View style={styles.dpAndAboutSeparator} />
          </View>
        </Modal>
        <Modal
          style={{ margin: 0 }}
          presentationStyle="pageSheet"
          animationType="slide"
          onRequestClose={() => {
            setModalVisibleFav(!modalVisibleFav);
          }}
          visible={modalVisibleFav}>
          <View style={{ backgroundColor: '#363636', padding: 10 }}>
            <View style={styles.closeAndDoneContainer}>
              <View style={styles.extraViewTop} />
              <Pressable
                onPress={() => setModalVisibleFav(false)}
                style={styles.closeButtonWrapper}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={styles.closeButton}
                />
              </Pressable>
            </View>
            <View style={{ height: '100%' }}>
              <FlatList
                ListEmptyComponent={() => <EmptyFavorite />}
                bounces={false}
                ItemSeparatorComponent={() => (
                  <View style={{ height: 20 }}></View>
                )}
                data={threads}
                renderItem={({ item }) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Image
                        style={{
                          borderRadius: 5,
                          width: '30%',
                          aspectRatio: 2 / 3,
                        }}
                        source={{
                          uri: AppConstants.API_IMAGE + item?.poster_path,
                        }}
                      />
                      <View style={{ width: '3%' }}></View>
                      <View style={{ width: '67%' }}>
                        <Text>
                          <Text
                            style={{
                              fontSize: 18,
                              fontWeight: '400',
                              color: 'white',
                            }}>
                            {item?.title}
                          </Text>
                          <Text style={{ color: '#ddd', fontSize: 14 }}>
                            ({item?.release_date?.substring(0, 4)})
                          </Text>
                        </Text>
                        <View style={{ height: 10 }}></View>
                        <View>
                          <FlatList
                            style={{ maxHeight: 300 }}
                            numColumns={4}
                            data={item?.genres}
                            renderItem={renderItem}
                          />
                        </View>
                        <View style={{ height: 5 }}></View>
                        <View>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                            }}>
                            Runtime - {getRuntime(item?.runtime)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProfileScreen;
