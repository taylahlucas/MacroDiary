import { ScrollView, ViewStyle } from 'react-native';
import listStyles from './ListStyles.native';

interface CustomListProps {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  isHorizontal?: boolean;
};

const ScrollableList = ({ children, style, contentContainerStyle, isHorizontal = false }: CustomListProps) => {
  return (
    <ScrollView 
      contentContainerStyle={{...listStyles.scrollableContent, ...contentContainerStyle}}
      style={{...listStyles.scrollableList, ...style}}
      horizontal={isHorizontal}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollableList;