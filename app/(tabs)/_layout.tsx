import { Tabs } from 'expo-router';
import { Colors } from '@constants/theme';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import icons from '@constants/icons';

type TabBarIconProps = {
  title: string;
  focused: boolean;
  source: ImageSourcePropType;
  color: string;
};

const TabBarIcon = ({ title, focused, source, color }: TabBarIconProps) => {
  return (
    <View className="items-center justify-center gap-1 w-full h-full">
      <Image
        source={source}
        resizeMode="contain"
        tintColor={color}
        className="w-4 h-4"
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-[11px]`}
        style={{ color: focused ? Colors.secondary.default : Colors.gray[100] }}
      >
        {title}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors.secondary.default,
        tabBarInactiveTintColor: Colors.gray[100],
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              title={'Home'}
              focused={focused}
              source={icons.home}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              title={'Bookmark'}
              focused={focused}
              source={icons.bookmark}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              title={'Create'}
              focused={focused}
              source={icons.plus}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              title={'Profile'}
              focused={focused}
              source={icons.profile}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.primary,
    height: 60,
    elevation: 0,
  },
});

export default TabsLayout;
