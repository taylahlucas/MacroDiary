import { View } from 'react-native';
import Dropdown from '@components/general/Dropdown/Dropdown.native';
import ScannedItemList from './ScannedItemList.native';
import ScannedItemMenuList from './ScannedItemMenuList.native';
import CustomSearchBarWithBarcode from '@components/general/CustomSearchBar/CustomSearchBarWithBarcode.native';
import Spacing from '@components/general/Spacing.native';

const ScannedItemSearch = () => {
  return (
    <Dropdown
      header={
        <View style={ { flexDirection: 'column' }}>      
          <Spacing height={32} />  
          <CustomSearchBarWithBarcode />
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