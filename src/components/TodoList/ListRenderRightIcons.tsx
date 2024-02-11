import {FC} from 'react';
import {StyleSheet, Pressable, Animated, Share} from 'react-native';
import {DeleteIcon, ShareIcon} from '../../styles/icons';
import colors from '../../styles/colors';
import unit from '../../styles/unit';
import useNavigation from '../../hooks/useNavigation';
import routes from '../../navigation/routes';

type ListRenderRightIconsProps = {
  dragX: Animated.AnimatedInterpolation<string | number>;
  id: string;
};

const ListRenderRightIcons: FC<ListRenderRightIconsProps> = ({dragX, id}) => {
  const {push} = useNavigation();
  const trans = dragX.interpolate({
    inputRange: [10, 30, 50, 70],
    outputRange: [-0.8, -1.2, 5, 20],
  });

  const handleOnDeletePress = () => {
    push(routes.CheckModal, {id});
  };

  const handleOnSharePress = async () => {
    await Share.share({message: id});
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{translateX: trans}],
        },
      ]}>
      <Pressable
        style={[styles.icon, {backgroundColor: colors.sky}]}
        onPress={handleOnSharePress}>
        <ShareIcon />
      </Pressable>
      <Pressable
        style={[styles.icon, {backgroundColor: colors.danger}]}
        onPress={handleOnDeletePress}>
        <DeleteIcon />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    padding: 20 * unit,
  },
});

export default ListRenderRightIcons;
