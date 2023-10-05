import React from 'react';
import { View } from 'react-native';
import { ProductDataType } from '../../../utils/CustomTypes.native';
import CustomSearchBar from '../../general/CustomSearchBar/CustomSearchBar.native';
import Dropdown from '../../general/Dropdown/Dropdown.native';
import ScannedItemList from './ScannedItemList.native';
import ScrollableList from '../../../components/general/List/ScrollableList.native';
import { styles } from './ScannedItemStyles.native';
import BarcodeScannerButton from '../BarcodeScanner/BarcodeScannerButton.native';
import { ScannedItemListTitle } from './ScannedItemStyledComponents.native';
import useMainState from '../../../redux/hooks/useMainState.native';

interface ScannedItemSearchProps {
  items: ProductDataType[];
}

const ScannedItemSearch = ({ items }: ScannedItemSearchProps) => {
  const { filteredProductData } = useMainState();

  return (
    <Dropdown
      header={
        <>        
          <View style={styles.searchContainer}>
            <CustomSearchBar />
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
        <ScannedItemList items={filteredProductData} />
      }
    />
  );
};

export default ScannedItemSearch;