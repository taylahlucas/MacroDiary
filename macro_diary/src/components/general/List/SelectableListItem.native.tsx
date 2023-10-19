import { Pressable } from 'react-native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import StyledText from '../Text/StyledText.native';
import listStyles from './ListStyles.native';

interface SelectableListItemProps {
  title: string;
  onClick: () => void;
  style?: any;
  isHorizontal?: boolean;
};

const SelectableListItem = ({ title, onClick, style }: SelectableListItemProps) => {
  const theme = useGetTheme();
  return (
    <Pressable 
      style={{...listStyles.selectableButton, ...style}} 
      onPress={onClick}
    >
      <StyledText color={theme.lightGrey} type={'ListItemTitleBold'} align={'left'} style={{ marginLeft: 16 }}>
        {title}
      </StyledText>
    </Pressable>
  );
};

export default SelectableListItem;