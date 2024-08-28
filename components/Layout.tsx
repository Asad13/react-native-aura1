import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { View, useColorScheme, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';
import { Colors } from '@constants/theme';

const Layout = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black[200] : Colors.gray[100],
    color: isDarkMode ? Colors.gray[100] : Colors.black.default,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <View style={[styles.container, backgroundStyle]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    paddingTop: 5,
  },
});

export default Layout;
