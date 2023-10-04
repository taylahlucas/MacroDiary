import ScrollableList from '../../general/List/ScrollableList.native';
import ScannedItemListItem from './ScannedItemListItem.native';
import { styles } from './ScannedItemStyles.native';
import { ProductDataType } from '../../../utils/CustomTypes.native';

interface ScannedItemListProps {
  items: ProductDataType[];
}

const ScannedItemList = ({ items }: ScannedItemListProps) => {
  return (
    <ScrollableList style={styles.scrollContainer}>
      {items.map((item, index) => <ScannedItemListItem key={index} title={item.title} macros={item.macros} />)}
    </ScrollableList>
  )
};

export default ScannedItemList;