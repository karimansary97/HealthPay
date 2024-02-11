import {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routes from './routes';
import Home from '../screens/Home';
import TodoDetails from '../screens/TodoDetails';
import CheckModal from '../components/TodoList/CheckModal';

type MainNavigationProps = {};
const Stack = createStackNavigator();

const MainNavigation: FC<MainNavigationProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.Home} component={Home} />
      <Stack.Screen
        name={routes.TodoDetails}
        component={TodoDetails}
        options={{presentation: 'modal'}}
      />
      <Stack.Screen
        name={routes.CheckModal}
        component={CheckModal}
        options={{presentation: 'transparentModal'}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
