import { View } from 'react-native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import StyledText from '../Text/StyledText.native';
import listStyles from './ListStyles.native';

interface SelectableListItemProps {
  title: string;
  style?: any;
  isHorizontal?: boolean;
};

const SelectableListItem = ({ title, style }: SelectableListItemProps) => {
  const theme = useGetTheme();

  return (
    <View style={{...listStyles.selectableButton, ...style}}>
      <StyledText color={theme.lightGrey} type={'ListItemTitleBold'} align={'left'} style={{ marginLeft: 16 }}>
        {title}
      </StyledText>
    </View>
  );
};

export default SelectableListItem;