import React from 'react';
import { View } from 'react-native';
import CustomSearchBar from '../../general/CustomSearchBar/CustomSearchBar.native';
import Dropdown from '../../general/Dropdown/Dropdown.native';
import ScannedItemList from './ScannedItemList.native';
import { styles } from './ScannedItemStyles.native';
import BarcodeScannerButton from '../BarcodeScanner/BarcodeScannerButton.native';
import ScannedItemMenuList from './ScannedItemMenuList.native';

const ScannedItemSearch = () => {
  return (
    <Dropdown
      header={
        <View style={{ flexDirection: 'column' }}>        
          <View style={styles.searchContainer}>
            <CustomSearchBar />
            <BarcodeScannerButton />
          </View>
          <ScannedItemMenuList />
        </View>
      }
      view={
        <ScannedItemList  />
      }
    />
  );
};

export default ScannedItemSearch;