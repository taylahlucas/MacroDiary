import { Pressable } from 'react-native';
import StyledText from '../Text/StyledText.native';
import listStyles from './ListStyles.native';

interface SelectableListItemProps {
  title: string;
  onClick: () => void;
  style?: any;
};

const SelectableListItem = ({ title, onClick, style }: SelectableListItemProps) => {
  return (
    <Pressable 
      style={{...listStyles.selectableButton, ...style}} 
      onPress={onClick}
    >
      <StyledText type={'ListItemTitleBold'} align={'left'} style={{ marginLeft: 16 }}>
        {title}
      </StyledText>
    </Pressable>
  );
};

export default SelectableListItem;