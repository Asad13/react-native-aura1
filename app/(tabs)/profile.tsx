import Layout from '@components/Layout';
import { ScrollContainer, ThemedText } from '@ui';
import { View } from 'react-native';

const Profile = () => {
  return (
    <Layout>
      <ScrollContainer>
        <View>
          <ThemedText>Profile</ThemedText>
        </View>
      </ScrollContainer>
    </Layout>
  );
};

export default Profile;
