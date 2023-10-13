import { View } from 'react-native';
import Dropdown from '../../general/Dropdown/Dropdown.native';
import ScannedItemList from './ScannedItemList.native';
import ScannedItemMenuList from './ScannedItemMenuList.native';
import CustomSearchBarWithBarcode from '../../general/CustomSearchBar/CustomSearchBarWithBarcode.native';
import { styles } from './ScannedItemStyles.native';
import Spacing from '../../general/Spacing.native';

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