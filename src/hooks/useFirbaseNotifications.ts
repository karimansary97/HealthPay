import {useEffect} from 'react';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee, {
  EventType,
  Event,
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
import useGetFirebaseDeviceToken from './useGetFirebaseDeviceToken';

const displayNotifee = async (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage,
) => {
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'default',
    importance: AndroidImportance.HIGH,
    visibility: AndroidVisibility.PUBLIC,
  });

  notifee.displayNotification({
    title: remoteMessage?.notification?.title,
    body: remoteMessage?.notification?.body,
    data: remoteMessage?.data,
    android: {
      channelId,
      importance: AndroidImportance.HIGH,
      visibility: AndroidVisibility.PUBLIC,
      pressAction: {
        id: 'default',
      },
    },
  });
};

const onNotificationOpenedApp = (
  remoteMessage: FirebaseMessagingTypes.RemoteMessage | null,
) => {
  console.log(remoteMessage);
};

const onForground = async ({type}: Event) => {
  if (type === EventType.PRESS) {
    // could do any thing when we pressed on the notify like open screen or etc
  }
};

const useFirbaseNotifications = () => {
  useGetFirebaseDeviceToken();

  useEffect(() => {
    const unsubscribe = messaging().onMessage(displayNotifee);
    const unsubscribeOpenApp = messaging().onNotificationOpenedApp(
      onNotificationOpenedApp,
    );
    const unsubscribeForeground = notifee.onForegroundEvent(onForground);
    messaging().getInitialNotification().then(onNotificationOpenedApp);

    return () => {
      unsubscribe();
      unsubscribeOpenApp();
      unsubscribeForeground();
    };
  }, []);
};

export default useFirbaseNotifications;
