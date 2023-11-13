import { View } from 'react-native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import { Macro } from '@utils/CustomTypes.native';
import ScannedItemContent from './ScannedItemContent.native';
import Spacing from '@components/general/Spacing.native';
import { styles } from './ScannedItemStyles.native';
import CustomPieChart from '@components/general/Charts/CustomPieChart.native';
import { useGetChartData } from './hooks/useGetChartData.native';
import StyledText from '@components/general/Text/StyledText.native';
import { ScannedItemContainer } from './ScannedItemStyledComponents.native';

interface ScannedItemProps {
  macros: Macro;
}

const ScannedItem = ({ macros }: ScannedItemProps) => {
  const theme = useGetTheme();
  const data = useGetChartData(macros);

  return (
    <ScannedItemContainer>
      <View style={{ ...styles.container, backgroundColor: theme.darkPurple }}>
        <Spacing height={16}/>
        <View style={styles.chartContainer}>
          <CustomPieChart isDonut={true} data={data} />
        </View>
        <>
          <StyledText type={'ListItemSubTitleBold'} align={'right'}>per 100g</StyledText>
          <Spacing height={16} />
          {Object.entries(data).map((name, index) => (
            <ScannedItemContent key={index} name={name[1].title} amount={name[1].value} />
          ))}
        </>
      </View>
    </ScannedItemContainer>
  );
};

export default ScannedItem;