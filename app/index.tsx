import Layout from '@components/Layout';
import ScrollContainer from '@ui/ScrollContainer';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <Layout>
      <ScrollContainer>
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="font-pblack text-3xl">Hello Aura</Text>
          <Link href="/home" className="text-blue-600">
            <Text>Go To Home</Text>
          </Link>
        </View>
      </ScrollContainer>
    </Layout>
  );
}
