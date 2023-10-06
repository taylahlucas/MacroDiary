import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import StyledText from "../Text/StyledText.native";
import { DaysOfWeekContainer, DaysOfWeekItem } from './DaysOfWeekStyledComponents.native';

const DaysOfWeek = () => {
  const theme = useGetTheme();
  const daysOfWeek = ["M", "Tu", "W", "Th", "F", "Sa", "Su"];
  
  return (
    <DaysOfWeekContainer>
      {daysOfWeek.map(day => 
        <DaysOfWeekItem backgroundColor={theme.darkGrey}>
          <StyledText type={'ListItemTitleBold'}>{day}</StyledText>
        </DaysOfWeekItem>
      )}
    </DaysOfWeekContainer>
  );
};

export default DaysOfWeek;