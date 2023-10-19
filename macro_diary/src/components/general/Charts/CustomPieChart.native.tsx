import { PieChart } from 'react-native-gifted-charts';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { ChartDataProps } from '../../../utils/CustomTypes.native';

interface CustomPieChartProps {
  isDonut?: boolean;
  data: ChartDataProps[];
}
const CustomPieChart = ({ isDonut = false, data }: CustomPieChartProps) => {
  const theme = useGetTheme();

  return (
    <PieChart
      donut={isDonut}
      data={data} 
      radius={80}
      focusOnPress
      innerCircleColor={theme.black}
      showText
      textSize={20}
      textColor={theme.midGrey}
    />
  );
};

export default CustomPieChart;