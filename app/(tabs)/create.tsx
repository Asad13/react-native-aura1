import Layout from '@components/Layout';
import { ScrollContainer, ThemedText } from '@ui';
import { View } from 'react-native';

const Create = () => {
  return (
    <Layout>
      <ScrollContainer>
        <View>
          <ThemedText>Create</ThemedText>
        </View>
      </ScrollContainer>
    </Layout>
  );
};

export default Create;
