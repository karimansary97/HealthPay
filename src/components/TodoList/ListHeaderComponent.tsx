import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../Text';

type ListHeaderComponentProps = {};

const ListHeaderComponent: FC<ListHeaderComponentProps> = () => {
  return (
    <View style={styles.container}>
      <Text semiBold size="xxlarge">
        Today's Task
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListHeaderComponent;
