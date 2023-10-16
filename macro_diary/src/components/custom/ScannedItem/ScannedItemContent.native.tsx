import { View } from 'react-native';
import { styles } from './ScannedItemStyles.native';
import StyledText from '@components/general/Text/StyledText.native';

interface ScannedItemContentProps {
  name: string;
  amount: number;
}

const ScannedItemContent = ({ name, amount }: ScannedItemContentProps) => {
  return (
    <View style={styles.itemContainer}>
      <StyledText type={'ListItemSubTitle'}>{name}</StyledText>
      <StyledText type={'ListItemSubTitle'}>{amount?.toString()}</StyledText>
    </View>
  );
};

export default ScannedItemContent;