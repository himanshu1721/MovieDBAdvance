import firestore from '@react-native-firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
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
import DatePicker from 'react-native-date-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { SvgUri } from 'react-native-svg';
import { useDispatch, useSelector } from 'react-redux';
import Icons from '../../assets/images';
import DrawerIconComponent from '../../components/DrawerIconComponent';
import HeaderTitle from '../../components/HeaderTitle';
import { Strings } from '../../constants';
import AppConstants from '../../constants/AppConstants';
import { updateProfile } from '../../features/profile/profileSlice';
import { useCurrentUserDetails } from '../../hooks/useCurrentUID';
import { underAgeValidate } from '../../services/TimeUtils';
import { Colors, moderateScale } from '../../themes';
import CustomHeader from '../movieDetails/components/Header';
import createTwoButtonAlert from './components/DateOfBirthAlert';
import EditProfile from './components/EditProfileField';
import EmptyFavorite from './components/EmptyFavoriteList';
import FavoriteMovieCard from './components/FavoriteMovieCard';
import styles from './styles/ProfileStyles';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [threads, setThreads] = useState([]);
  const [date, setDate] = useState<Date>(new Date());
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const { currentUserUID, currentUsername } = useCurrentUserDetails();
  const name = useSelector(state => state.profile.name);
  const username = useSelector(state => state.profile.username);
  const about = useSelector(state => state.profile.about);
  const dob = useSelector(state => state.profile.dob);
  const isDOBAdded = useSelector(state => state.profile.isDOBAdded);
  const [customName, setCustomName] = useState<string>('');
  const [customUsername, setCustomUsername] = useState<string>('');
  const [customAbout, setCustomAbout] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalVisibleFav, setModalVisibleFav] = useState<boolean>(false);
  const [modalVisibleDOB, setModalVisibleDOB] = useState<boolean>(false);

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

  const getUserProfileDetails = async () => {
    const user = await firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .get();
    dispatch(updateProfile(user.data()));
  };

  useEffect(() => {
    getUserProfileDetails();
  }, []);

  useEffect(() => {
    setCustomName(name);
    setCustomUsername(username);
    setCustomAbout(about);
  }, [name, username, about]);

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

  const updateDOB = async () => {
    firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .set({ isAdult: !underAgeValidate(date) }, { merge: true });
    firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .set({ dob: date }, { merge: true });
    firestore()
      .collection('users')
      .doc(`${currentUserUID}`)
      .set({ isDOBAdded: true }, { merge: true });
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

  const onDOBAdded = () => {
    createTwoButtonAlert(() => {
      updateDOB();
      getUserProfileDetails();
      setModalVisibleDOB(false);
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getUserProfileDetails();
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          renderMiddle={<HeaderTitle title={Strings.myProfile} />}
          renderIcon={
            <DrawerIconComponent onTap={() => navigation.openDrawer()} />
          }
          backButton={false}
        />
        <ScrollView
          refreshControl={
            <RefreshControl
              tintColor={Colors.white}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
          bounces={true}>
          <View style={styles.subContainer}>
            <View style={styles.dpAndEditProfileContainer}>
              <View style={styles.dpAndNameContainer}>
                <View style={styles.dpContainer}>
                  <SvgUri
                    width={moderateScale(70)}
                    height={moderateScale(70)}
                    uri={`${AppConstants.DICE_BEAR_API}${currentUsername}20.svg`}
                  />
                </View>
                <View style={styles.dpAndInfoSeparator} />
                <View>
                  <Text style={styles.nameStyles}>{name}</Text>
                  <Text style={styles.usernameStyles}>@{username}</Text>
                </View>
              </View>
              <View style={styles.editProfileButtonContainer}>
                <TouchableOpacity
                  onPress={() => setModalVisible(true)}
                  activeOpacity={0.8}
                  style={styles.editProfileButton}>
                  <Text style={styles.editProfileText}>
                    {Strings.editProfile}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.dpAndAboutSeparator} />
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutStyles}>{about}</Text>
            </View>
            <View style={styles.dpAndAboutSeparator} />
            <View style={styles.dobContainer}>
              <Image source={Icons.balloon} style={styles.birthdayIcon} />
              <Text style={styles.dateOfBirthTextStyles}>
                {isDOBAdded && dob?.toDate()?.toDateString()}
              </Text>
              {!isDOBAdded && (
                <TouchableOpacity onPress={() => setModalVisibleDOB(true)}>
                  <Text style={{ color: Colors.blue }}>
                    {Strings.addYourBirthday}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.profileAndFavoriteSeparator} />
          <View style={styles.favoritesContainer}>
            <Text style={styles.favoritesText}>Favorites</Text>
            <View style={styles.favoritesAndButtonSeparator} />
            <TouchableOpacity
              style={styles.showFavoriteButton}
              onPress={() => setModalVisibleFav(true)}>
              <Text style={{ fontSize: moderateScale(15) }}>
                {Strings.showFavorite}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal
          presentationStyle="pageSheet"
          style={styles.modal}
          animationType="slide"
          onRequestClose={() => {
            setModalVisibleDOB(!modalVisibleDOB);
          }}
          visible={modalVisibleDOB}>
          <View style={styles.modalContainer}>
            <View style={styles.closeAndDoneContainer}>
              <Pressable
                onPress={() => setModalVisibleDOB(false)}
                style={styles.closeButtonWrapper}>
                <Image source={Icons.close} style={styles.closeButton} />
              </Pressable>
              <View style={styles.extraViewTop} />
              <Pressable onPress={onDOBAdded} style={styles.closeButtonWrapper}>
                <Image source={Icons.tick} style={styles.closeButton} />
              </Pressable>
            </View>
            <View style={styles.datePickerContainer}>
              <DatePicker
                textColor={Colors.white}
                mode="date"
                date={date}
                onDateChange={setDate}
              />
            </View>
          </View>
        </Modal>
        <Modal
          presentationStyle="pageSheet"
          style={styles.modal}
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
                <Image source={Icons.close} style={styles.closeButton} />
              </Pressable>
              <View style={styles.extraViewTop} />
              <Pressable
                onPress={async () => {
                  updateAbout();
                  setModalVisible(false);
                }}
                style={styles.closeButtonWrapper}>
                <Image source={Icons.tick} style={styles.closeButton} />
              </Pressable>
            </View>
            <EditProfile
              maxCharactersAllowed={AppConstants.nameLimit}
              currentCount={customName.length}
              value={customName}
              title={Strings.name}
              onEditField={(text: string) => setCustomName(text)}
            />
            <View style={styles.textInputSeparator} />
            <EditProfile
              maxCharactersAllowed={AppConstants.usernameLimit}
              currentCount={customUsername.length}
              value={customUsername}
              title={Strings.username}
              onEditField={(text: string) => setCustomUsername(text)}
            />
            <View style={styles.textInputSeparator} />
            <EditProfile
              maxCharactersAllowed={AppConstants.userAboutLimit}
              currentCount={customAbout.length}
              title={Strings.about}
              value={customAbout}
              onEditField={(text: string) => setCustomAbout(text)}
            />
            <View style={styles.dpAndAboutSeparator} />
          </View>
        </Modal>
        <Modal
          presentationStyle="pageSheet"
          animationType="slide"
          onRequestClose={() => {
            setModalVisibleFav(!modalVisibleFav);
          }}
          visible={modalVisibleFav}>
          <View style={styles.modalStyles}>
            <View style={styles.closeAndDoneContainer}>
              <View style={styles.extraViewTop} />
              <Pressable
                onPress={() => setModalVisibleFav(false)}
                style={styles.closeButtonWrapper}>
                <Image source={Icons.close} style={styles.closeButton} />
              </Pressable>
            </View>
            <View style={styles.favoriteMoviesWrapper}>
              <FlatList
                ListEmptyComponent={() => <EmptyFavorite />}
                bounces={false}
                ItemSeparatorComponent={() => (
                  <View style={styles.itemSeparatorFavoriteMovies} />
                )}
                data={threads}
                renderItem={({ item }) => {
                  return <FavoriteMovieCard item={item} />;
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
