import {FC} from 'react';
import {StyleSheet, Text} from 'react-native';
import Layout from '../../components/Layout';

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <Layout style={styles.container}>
      <Text>ssss</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
