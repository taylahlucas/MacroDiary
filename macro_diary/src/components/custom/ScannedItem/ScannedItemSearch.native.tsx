import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ProductDataType } from '../../../utils/CustomTypes.native';
import CustomSearchBar from '../../general/CustomSearchBar/CustomSearchBar.native';
import Dropdown from '../../general/Dropdown/Dropdown.native';
import ScannedItemList from './ScannedItemList.native';
import ScrollableList from '../../../components/general/List/ScrollableList.native';
import { styles } from './ScannedItemStyles.native';
import BarcodeScannerButton from '../BarcodeScanner/BarcodeScannerButton.native';
import { productDataMock } from '../../../mock/mockData.native';
import { ScannedItemListTitle } from './ScannedItemStyledComponents.native';
// import useMainDispatch from '../../../redux/hooks/useMainDispatch.native';
import useMainState from '../../../redux/hooks/useMainState.native';

interface ScannedItemSearchProps {
  items: ProductDataType[];
}

const ScannedItemSearch = ({ items }: ScannedItemSearchProps) => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredItems, setFilteredItems] = useState<ProductDataType[]>(productDataMock);
  // TODO: Move to custom hook when redux is added
  // useEffect(() => {
  //   if (searchValue.length > 2) {
  //     setFilteredItems(items.filter((item) => item.title.includes(searchValue)));
  //   }
  //   else {
  //     setFilteredItems(items);
  //   }
  // }, [searchValue, items])

  return (
    <Dropdown
      header={
        <>        
          <View style={styles.searchContainer}>
            <CustomSearchBar setSearchValue={setSearchValue} />
            <BarcodeScannerButton />
          </View>
          <ScrollableList
            style={{ maxHeight: 80, marginLeft: -8 }}
            isHorizontal={true}
          >
            <ScannedItemListTitle type={'ListItemSubTitle'}>scanned items</ScannedItemListTitle>
            <ScannedItemListTitle type={'ListItemSubTitle'}>recipes</ScannedItemListTitle>
            <ScannedItemListTitle type={'ListItemSubTitle'}>custom recipes</ScannedItemListTitle>
          </ScrollableList>
        </>
      }
      view={
        <ScannedItemList items={filteredItems} />
      }
    />
  );
};

export default ScannedItemSearch;