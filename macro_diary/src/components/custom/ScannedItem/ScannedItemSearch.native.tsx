import React from 'react';
import { View } from 'react-native';
import { ProductDataType } from '../../../utils/CustomTypes.native';
import CustomSearchBar from '../../general/CustomSearchBar/CustomSearchBar.native';
import Dropdown from '../../general/Dropdown/Dropdown.native';
import ScannedItemList from './ScannedItemList.native';
import { styles } from './ScannedItemStyles.native';
import BarcodeScannerButton from '../BarcodeScanner/BarcodeScannerButton.native';
import useMainState from '../../../redux/hooks/useMainState.native';
import ScannedItemMenuList from './ScannedItemMenuList.native';

const ScannedItemSearch = () => {
  const { filteredProductData} = useMainState();

  return (
    <Dropdown
      header={
        <>        
          <View style={styles.searchContainer}>
            <CustomSearchBar />
            <BarcodeScannerButton />
          </View>
          <ScannedItemMenuList />
        </>
      }
      view={
        <ScannedItemList items={filteredProductData} />
      }
    />
  );
};

export default ScannedItemSearch;