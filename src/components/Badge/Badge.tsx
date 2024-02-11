import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Text';
import unit from '../../styles/unit';
import colors from '../../styles/colors';

type BadgeProps = {
  done: boolean;
};

const Badge: FC<BadgeProps> = ({done = false}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: done ? colors.sky : colors.danger},
      ]}>
      <Text size="normal">{done ? 'completed' : 'uncompleted'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4 * unit,
    paddingHorizontal: 6 * unit,
    borderRadius: 12 * unit,
  },
});

export default Badge;
