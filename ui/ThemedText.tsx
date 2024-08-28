import { StyleProp, Text, TextStyle, useColorScheme } from 'react-native';
import { Colors } from '@constants/theme';

type ThemedTextProps = {
  classNames?: string;
  styles?: StyleProp<TextStyle>;
  children: string;
};

/**
 * ThemedText component for displaying text based on mode or color scheme of the device.
 * Optional styling available through classnames and styles object or array.
 *
 * Caution: To change the color of the text always use styles object or array.
 *
 * @param {ThemedTextProps} props - Props for the component.
 * @returns {JSX.Element} A styled text element.
 */
const ThemedText = ({ children, classNames, styles }: ThemedTextProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  const textStyle = {
    color: isDarkMode ? Colors.gray[100] : Colors.black.default,
  };

  return (
    <Text
      className={`${classNames !== undefined ? classNames : ''}`}
      style={[textStyle, styles]}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
