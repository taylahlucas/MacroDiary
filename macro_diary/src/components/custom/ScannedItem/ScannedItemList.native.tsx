import ScrollableList from '../../general/List/ScrollableList.native';
import ScannedItemListItem from './ScannedItemListItem.native';
import { styles } from './ScannedItemStyles.native';
import { ProductDataType } from '../../../utils/CustomTypes.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';

interface ScannedItemListProps {
  items: ProductDataType[];
}

const ScannedItemList = ({ items }: ScannedItemListProps) => {
  const theme = useGetTheme();

  return (
    <ScrollableList style={styles.scrollContainer}>
      {items.map((item, index) => <ScannedItemListItem key={index} title={item.title} macros={item.macros} color={theme.darkGrey} />)}
    </ScrollableList>
  )
};

export default ScannedItemList;