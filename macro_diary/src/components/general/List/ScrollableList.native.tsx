import { ScrollView } from 'react-native';
import listStyles from './ListStyles.native';

interface CustomListProps {
  children: JSX.Element | JSX.Element[];
  style?: any;
  isHorizontal?: boolean;
};

const ScrollableList = ({ children, style, isHorizontal = false }: CustomListProps) => {
  return (
    <ScrollView 
      contentContainerStyle={listStyles.scrollableContent}
      style={{...listStyles.scrollableList, ...style}}
      horizontal={isHorizontal}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollableList;