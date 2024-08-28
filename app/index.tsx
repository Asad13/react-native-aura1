import Layout from '@components/Layout';
import { ScrollContainer, ThemedText } from '@ui';
import { View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <Layout>
      <ScrollContainer>
        <View className="flex-1 items-center justify-center">
          <ThemedText classNames="font-pblack text-3xl">Hello Aura</ThemedText>
          <Link href="/home">
            <ThemedText styles={{ color: '#0096c7' }}>Go To Home</ThemedText>
          </Link>
        </View>
      </ScrollContainer>
    </Layout>
  );
}
