import ScrollableList from '@components/general/List/ScrollableList.native';
import ScannedItemListItem from './ScannedItemListItem.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import useMainState from '@redux/hooks/useMainState.native';
import { styles } from './ScannedItemStyles.native';

const ScannedItemList = () => {
  const theme = useGetTheme();
  const { filteredProductData } = useMainState();

  return (
    <ScrollableList style={styles.scrollContainer}>
      {filteredProductData.map((item, index) => 
        <ScannedItemListItem key={index} title={item.title} macros={item.macros} color={theme.darkGrey} />)}
    </ScrollableList>
  )
};

export default ScannedItemList;