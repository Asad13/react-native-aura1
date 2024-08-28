import Layout from '@components/Layout';
import { ScrollContainer, ThemedText } from '@ui';
import { View } from 'react-native';

const Signin = () => {
  return (
    <Layout>
      <ScrollContainer>
        <View>
          <ThemedText>Signin</ThemedText>
        </View>
      </ScrollContainer>
    </Layout>
  );
};

export default Signin;
