import { View } from 'react-native';
import ScannedItemMenuList from './ScannedItemMenuList.native';
import CustomSearchBarWithBarcode from '@components/general/CustomSearchBar/CustomSearchBarWithBarcode.native';
import Spacing from '@components/general/Spacing.native';

const ScannedItemSearch = () => {
  return (
    <View style={ { flexDirection: 'column' }}>      
      <Spacing height={32} />  
      <CustomSearchBarWithBarcode />
      <ScannedItemMenuList />
    </View>
  );
};

export default ScannedItemSearch;