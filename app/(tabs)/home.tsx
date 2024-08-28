import Layout from '@components/Layout';
import ScrollContainer from '@ui/ScrollContainer';
import { View, Text } from 'react-native';

const Home = () => {
  return (
    <Layout>
      <ScrollContainer>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollContainer>
    </Layout>
  );
};

export default Home;
