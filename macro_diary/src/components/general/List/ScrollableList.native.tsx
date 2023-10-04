import { ScrollView } from 'react-native';
import listStyles from './ListStyles.native';

interface CustomListProps {
  children: JSX.Element | JSX.Element[];
  style?: any;
};

const ScrollableList = ({ children, style }: CustomListProps) => {
  return (
    <ScrollView 
      contentContainerStyle={listStyles.scrollableContent}
      style={{...listStyles.scrollableList, ...style}}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollableList;