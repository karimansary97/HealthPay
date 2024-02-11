import {FC} from 'react';
import {StyleSheet} from 'react-native';
import Layout from '../../components/Layout';
import FloatButton from '../../components/FloatButton/FloatButton';
import {AddIcon} from '../../styles/icons';
import unit from '../../styles/unit';
import TodoList from '../../components/TodoList';
import useNavigation from '../../hooks/useNavigation';
import routes from '../../navigation/routes';
import useTodoStore from '../../hooks/useTodoList';

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  const todos = useTodoStore(state => state.todos);

  const {push} = useNavigation();

  const handleOnAddPress = () => {
    push(routes.TodoDetails);
  };
  return (
    <Layout style={styles.container}>
      <TodoList list={todos} />
      <FloatButton
        Icon={AddIcon}
        onPress={handleOnAddPress}
        bottom={22 * unit}
        right={12 * unit}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
