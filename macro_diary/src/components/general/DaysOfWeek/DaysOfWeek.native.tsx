import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { DaysOfWeekEnum } from '../../../utils/CustomEnums.native';
import { daysOfWeek } from '../../../utils/Constants.native';
import StyledText from "../Text/StyledText.native";
import { DaysOfWeekContainer, DaysOfWeekItem } from './DaysOfWeekStyledComponents.native';
import moment from 'moment';

interface DaysOfWeekProps {
  selectedDay: DaysOfWeekEnum;
  setSelectedDay: (value: DaysOfWeekEnum) => void;
  // TODO: Make custom component
  weekRange: string[];
}

const DaysOfWeek = ({ selectedDay, setSelectedDay, weekRange }: DaysOfWeekProps) => {
  const theme = useGetTheme();
  const today = moment();

  return (
    <DaysOfWeekContainer>
      {daysOfWeek.map((day, index) => {
        const isSelectable = moment(weekRange[0]).add(index + 1, 'day') <= today;
        const backgroundColor = day === selectedDay && isSelectable ? theme.lightPurple : (
          isSelectable ? theme.darkGrey : theme.darkGrey
        );
        const textColor = day === selectedDay && isSelectable ? theme.lightestGrey : (
          isSelectable ? theme.midGrey : theme.black
        );

        return (
          <DaysOfWeekItem
            key={day} 
            backgroundColor={backgroundColor}
            disabled={!isSelectable}
            onPress={(): void => setSelectedDay(day)}
          >
            <StyledText 
              type={'ListItemTitleBold'} 
              color={textColor}
            >{day}</StyledText>
          </DaysOfWeekItem>
        )
      })}
    </DaysOfWeekContainer>
  );
};

export default DaysOfWeek;