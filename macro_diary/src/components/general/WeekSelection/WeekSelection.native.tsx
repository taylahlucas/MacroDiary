import { Pressable } from 'react-native';
import { IconTypeEnum } from '../../../utils/CustomEnums.native';
import Icon from '../../../components/general/Icon/Icon.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import StyledText from '../../../components/general/Text/StyledText.native';
import { WeekSelectionStyledComponents } from './WeekSelectionStyledComponents.native';

interface WeekSelectionProps {
  text: string;
  canGoRight: boolean;
  onLeftPress: () => void;
  onRightPress: () => void;
};

const WeekSelection = ({ 
  text,
  canGoRight = false,
  onLeftPress,
  onRightPress
}: WeekSelectionProps) => {
  const theme = useGetTheme();
  
  // TODO: Add changable dates
  return (
    <WeekSelectionStyledComponents>
      <Pressable onPress={onLeftPress}>
        <Icon
          name={'arrow-back'} 
          type={IconTypeEnum.Ionicons}
          color={theme.midGrey}
        />
      </Pressable>
      <StyledText type={'ListItemSubTitleBold'}>{text}</StyledText>
      <Pressable onPress={onRightPress}>
        <Icon 
          name={'arrow-forward'} 
          type={IconTypeEnum.Ionicons}
          color={canGoRight ? theme.midGrey : theme.darkGrey}
        />
      </Pressable>
    </WeekSelectionStyledComponents>
  );
};

export default WeekSelection;