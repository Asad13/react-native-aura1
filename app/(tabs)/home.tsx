import Layout from '@components/Layout';
import { ScrollContainer, ThemedText } from '@ui';
import { View } from 'react-native';

const Home = () => {
  return (
    <Layout>
      <ScrollContainer>
        <View>
          <ThemedText>Home</ThemedText>
        </View>
      </ScrollContainer>
    </Layout>
  );
};

export default Home;
