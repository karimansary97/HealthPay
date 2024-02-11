import {FC} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import unit from '../../styles/unit';
import colors from '../../styles/colors';
import {SvgProps} from 'react-native-svg';

type FloatButtonProps = {
  onPress: () => void;
  Icon?: React.FC<SvgProps>;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
};

const FloatButton: FC<FloatButtonProps> = ({
  onPress,
  Icon,
  top,
  bottom,
  right,
  left,
}) => {
  return (
    <Pressable
      style={[styles.container, {top, bottom, right, left}]}
      onPress={onPress}>
      {Icon && <Icon />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.sky,
    position: 'absolute',
    borderRadius: 50 * unit,
    height: 80 * unit,
    width: 80 * unit,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FloatButton;
