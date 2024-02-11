import {FC} from 'react';
import {StyleSheet, View, Animated, Pressable} from 'react-native';
import colors from '../../styles/colors';
import {useCardAnimation} from '@react-navigation/stack';
import useNavigation from '../../hooks/useNavigation';
import Text from '../Text';
import unit from '../../styles/unit';
import useRoute from '../../hooks/useRoute';
import useTodoStore from '../../hooks/useTodoList';

type CheckModalProps = {};

const CheckModal: FC<CheckModalProps> = () => {
  const {params} = useRoute();
  const {id = ''} = params ?? {};
  const {current} = useCardAnimation();
  const {goBack} = useNavigation();
  const removeTodo = useTodoStore(state => state.removeTodo);
  const scaling = current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0.9, 1],
    extrapolate: 'clamp',
  });

  const handleYesPress = () => {
    removeTodo(id);
    goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.overLay} onPress={goBack} />
      <Animated.View
        style={[
          styles.content,

          {
            transform: [
              {
                scale: scaling,
              },
            ],
          },
        ]}>
        <Text size="medium" bold>
          Are You Sure to delete this Item ?{' '}
        </Text>
        <View style={styles.btnCont}>
          <Pressable onPress={handleYesPress}>
            <Text semiBold size="large" color="secondary">
              Yes
            </Text>
          </Pressable>
          <Pressable onPress={goBack}>
            <Text semiBold size="large" color="secondary">
              No
            </Text>
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overLay: {
    ...(StyleSheet.absoluteFill as object),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    padding: 20 * unit,
    borderRadius: 10 * unit,
    backgroundColor: colors.primary,
  },
  btnCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 60 * unit,
    marginTop: 20 * unit,
  },
});

export default CheckModal;
