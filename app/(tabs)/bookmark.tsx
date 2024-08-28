import Layout from '@components/Layout';
import { ScrollContainer, ThemedText } from '@ui';
import { View } from 'react-native';

const Bookmark = () => {
  return (
    <Layout>
      <ScrollContainer>
        <View>
          <ThemedText>Bookmark</ThemedText>
        </View>
      </ScrollContainer>
    </Layout>
  );
};

export default Bookmark;
