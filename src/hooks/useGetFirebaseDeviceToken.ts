import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

const useGetFirebaseDeviceToken = () => {
  const requestFCMPermission = async () => {
    const authResponse = await messaging().requestPermission();
    const isEnabled =
      authResponse === messaging.AuthorizationStatus.AUTHORIZED ||
      authResponse === messaging.AuthorizationStatus.PROVISIONAL;
    if (isEnabled) {
    }
    if (Platform.OS === 'android') {
      try {
        const permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        if (permission === 'granted') {
          await messaging().getToken(); // we could store the token but now we used manully and if you want to try it please console this token and copy it then go to firebase to paste it like video to try it
        }
      } catch (error) {}
    }
  };

  useEffect(() => {
    requestFCMPermission();
  }, []);
};

export default useGetFirebaseDeviceToken;
