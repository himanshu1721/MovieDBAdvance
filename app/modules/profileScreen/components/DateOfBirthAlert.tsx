import { Alert } from 'react-native';
import { Strings } from '../../../constants';

const createTwoButtonAlert = (onPress: () => void) =>
  Alert.alert(Strings.warning, Strings.cannotChangeDOBLater, [
    {
      text: Strings.cancel,
      onPress: () => {},
      style: 'cancel',
    },
    {
      text: Strings.ok,
      onPress: onPress,
    },
  ]);

export default createTwoButtonAlert;
