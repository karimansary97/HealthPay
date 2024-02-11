import {FC, useEffect, useState} from 'react';
import {StyleSheet, View, Pressable, TextInput} from 'react-native';
import colors from '../../styles/colors';
import useNavigation from '../../hooks/useNavigation';
import unit from '../../styles/unit';
import Layout from '../../components/Layout';
import Text from '../../components/Text';
import useTodoStore from '../../hooks/useTodoList';
import uuid from 'react-native-uuid';
import useRoute from '../../hooks/useRoute';
import {CloseIcon} from '../../styles/icons';

type TodoDetailsProps = {};

const TodoDetails: FC<TodoDetailsProps> = ({}) => {
  const {params} = useRoute();
  const {id = '', title = '', desc = '', edit = false} = params ?? {};
  const {goBack} = useNavigation();

  const [titleText, setTitleText] = useState('');
  const [descText, setDescText] = useState('');

  const addTodo = useTodoStore(state => state.addTodo);
  const editTodo = useTodoStore(state => state.editTodo);

  const handleOnSavePress = () => {
    if (edit) {
      editTodo(id, titleText, descText);
    } else {
      addTodo({
        id: uuid.v4() + '',
        title: titleText,
        desc: descText,
        done: false,
      });
    }
    goBack();
  };
  const handleOnClosePress = () => {
    goBack();
  };

  useEffect(() => {
    setTitleText(title);
    setDescText(desc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handleOnClosePress}>
          <CloseIcon color={colors.sky} />
        </Pressable>
        <Pressable onPress={handleOnSavePress}>
          <Text size="xlarge" color="secondary">
            Save
          </Text>
        </Pressable>
      </View>
      <TextInput
        placeholder="Title"
        value={titleText}
        onChangeText={text => {
          setTitleText(text);
        }}
        style={styles.title}
        placeholderTextColor={'gray'}
      />
      <TextInput
        placeholder="You could write what you want"
        style={styles.desc}
        value={descText}
        onChangeText={text => {
          setDescText(text);
        }}
        placeholderTextColor={'gray'}
        multiline
        textAlignVertical="top"
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultBackGround,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10 * unit,
  },
  content: {
    padding: 16,
    borderRadius: 3,
  },
  title: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 2 * unit,
    color: colors.primaryText,
    fontSize: 30 * unit,
    fontWeight: '700',
  },
  desc: {
    flexGrow: 1,
    marginTop: 10 * unit,
    color: colors.primaryText,
  },
});

export default TodoDetails;
