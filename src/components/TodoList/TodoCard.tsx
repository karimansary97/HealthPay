import {FC, memo} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import unit from '../../styles/unit';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import ListRenderRightIcons from './ListRenderRightIcons';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Badge from '../Badge';
import useNavigation from '../../hooks/useNavigation';
import routes from '../../navigation/routes';
import useTodoStore from '../../hooks/useTodoList';

type TodoCardProps = {
  title: string;
  id: string;
  desc: string;
  done: boolean;
};

const TodoCard: FC<TodoCardProps> = ({title, id, desc, done}) => {
  const toggleTodoComplete = useTodoStore(state => state.toggleTodoComplete);
  const {push} = useNavigation();
  const handleOnCardPress = () => {
    push(routes.TodoDetails, {id, title, desc, edit: true});
  };
  const handleOnToggleTodoComplete = (isChecked: boolean) => {
    toggleTodoComplete(id, isChecked);
  };
  return (
    <Swipeable
      renderRightActions={(_, dragX) => (
        <ListRenderRightIcons dragX={dragX} id={id} />
      )}
      containerStyle={styles.container}>
      <Pressable style={styles.content} onPress={handleOnCardPress}>
        <BouncyCheckbox
          size={25}
          fillColor={colors.sky}
          unfillColor={colors.white}
          text={title}
          textStyle={styles.checkBoxText}
          innerIconStyle={styles.innerIconStyle}
          isChecked={done}
          onPress={(isChecked: boolean) => {
            handleOnToggleTodoComplete(isChecked);
          }}
        />
        <Badge done={done} />
      </Pressable>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20 * unit,
    borderRadius: 8 * unit,
  },
  content: {
    flex: 1,
    padding: 20 * unit,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBoxText: {color: colors.primaryText},
  innerIconStyle: {borderWidth: 2},
});

export default memo(TodoCard);
