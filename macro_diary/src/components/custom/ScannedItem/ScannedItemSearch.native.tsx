import { View } from 'react-native';
import ScannedItemMenuList from './ScannedItemMenuList.native';
import CustomSearchBarWithBarcode from '@components/general/CustomSearchBar/CustomSearchBarWithBarcode.native';
import Spacing from '@components/general/Spacing.native';
import { ScannedSearchContainer } from './ScannedItemStyledComponents.native';

const ScannedItemSearch = () => {
  return (
    <ScannedSearchContainer>      
      <Spacing height={32} />  
      <CustomSearchBarWithBarcode />
      <ScannedItemMenuList />
    </ScannedSearchContainer>
  );
};

export default ScannedItemSearch;