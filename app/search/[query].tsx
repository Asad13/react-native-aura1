import Layout from '@components/Layout';
import { ScrollContainer, ThemedText } from '@ui';
import { View } from 'react-native';

const Search = () => {
  return (
    <Layout>
      <ScrollContainer>
        <View>
          <ThemedText>Search</ThemedText>
        </View>
      </ScrollContainer>
    </Layout>
  );
};

export default Search;
