import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ProductDataType } from '../../../utils/CustomTypes.native';
import CustomSearchBar from '../../general/CustomSearchBar/CustomSearchBar.native';
import Dropdown from '../../general/Dropdown/Dropdown.native';
import ScannedItemList from './ScannedItemList.native';
import { styles } from './ScannedItemStyles.native';

interface ScannedItemSearchProps {
  items: ProductDataType[];
}

const ScannedItemSearch = ({ items }: ScannedItemSearchProps) => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredItems, setFilteredItems] = useState<ProductDataType[]>([]);

  useEffect(() => {
    if (searchValue.length > 2) {
      setFilteredItems(items.filter((item) => item.title.includes(searchValue)));
    }
    else {
      setFilteredItems(items);
    }
  }, [searchValue, items])

  return (
    <Dropdown
      header={
        <View style={styles.searchContainer}>
          <CustomSearchBar setSearchValue={setSearchValue} />
        </View>
      }
      view={
        <ScannedItemList items={filteredItems} />
      }
    />
  );
};

export default ScannedItemSearch;