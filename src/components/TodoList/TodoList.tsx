import {FC} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import TodoCard from './TodoCard';
import unit from '../../styles/unit';
import ListHeaderComponent from './ListHeaderComponent';
import TodoListType from '../../types/TodoList.type';

type TodoListProps = {
  list: TodoListType;
};

const TodoList: FC<TodoListProps> = ({list}) => {
  return (
    <FlatList
      data={list}
      contentContainerStyle={styles.content}
      ListHeaderComponent={ListHeaderComponent}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <TodoCard
          title={item?.title}
          id={item?.id}
          desc={item?.desc}
          done={item?.done}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20 * unit,
  },
});

export default TodoList;
