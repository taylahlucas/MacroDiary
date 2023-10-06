import { IconTypeEnum } from '../../../utils/CustomEnums.native';
import Icon from '../../../components/general/Icon/Icon.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import StyledText from '../../../components/general/Text/StyledText.native';
import { WeekSelectionStyledComponents } from './WeekSelectionStyledComponents.native';

const WeekSelection = () => {
  const theme = useGetTheme();
  
  // TODO: Add changable dates
  return (
    <WeekSelectionStyledComponents>
      <Icon
        name={'arrow-back'} 
        type={IconTypeEnum.Ionicons}
        color={theme.darkGrey}
      />
      <StyledText type={'ListItemSubTitleBold'}>1 oct - 7 oct</StyledText>
      <Icon 
        name={'arrow-forward'} 
        type={IconTypeEnum.Ionicons}
        color={theme.darkGrey}
      />
    </WeekSelectionStyledComponents>
  );
};

export default WeekSelection;