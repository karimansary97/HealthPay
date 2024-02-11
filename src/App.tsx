import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import MainNavigation from './navigation/MainNavigation';
import useFirbaseNotifications from './hooks/useFirbaseNotifications';
const App = () => {
  const onNavReady = () => {
    RNBootSplash.hide({fade: true});
  };
  useFirbaseNotifications();
  return (
    <NavigationContainer onReady={onNavReady}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default App;
