import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-pblack text-3xl">Hello Aura</Text>
      <Link href="/home" className="text-blue-600">
        <Text>Go To Home</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
