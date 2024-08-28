import Layout from '@components/Layout';
import { ScrollContainer, ThemedText } from '@ui';
import { View } from 'react-native';

const Signup = () => {
  return (
    <Layout>
      <ScrollContainer>
        <View>
          <ThemedText>Signup</ThemedText>
        </View>
      </ScrollContainer>
    </Layout>
  );
};

export default Signup;
