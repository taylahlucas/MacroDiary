import { View } from 'react-native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { MacroType } from '../../../utils/CustomTypes.native';
import ScannedItemContent from './ScannedItemContent.native';
import Spacing from '../../general/Spacing.native';
import { styles } from './ScannedItemStyles.native';
import CustomPieChart from '../../general/Charts/CustomPieChart.native';
import { useGetChartData } from './hooks/useGetChartData.native';
import Condition from '../../general/Condition.native';
import StyledText from '../../general/Text/StyledText.native';
import ScrollableList from '../../general/List/ScrollableList.native';

interface ScannedItemProps {
  macros: MacroType;
  isOpen: boolean;
}

const ScannedItem = ({ macros, isOpen = false }: ScannedItemProps) => {
  const theme = useGetTheme();
  const data = useGetChartData(macros);

  return (
    <Condition condition={isOpen}>
      <ScrollableList style={styles.scrollContainer}>
        <View style={{ ...styles.container, backgroundColor: theme.darkGrey }}>
          <Spacing height={16}/>
          <View style={styles.chartContainer}>
            <CustomPieChart isDonut={true} data={data} />
          </View>
          <View style={{ marginLeft: 16 }}>
            <StyledText type={'ListItemSubTitleBold'} align={'right'}>per 100g</StyledText>
            <Spacing height={16} />
            {Object.entries(data).map((name, index) => (
              <ScannedItemContent key={index} name={name[1].title} amount={name[1].value} />
            ))}
          </View>
        </View>
      </ScrollableList>
    </Condition>
  );
};

export default ScannedItem;