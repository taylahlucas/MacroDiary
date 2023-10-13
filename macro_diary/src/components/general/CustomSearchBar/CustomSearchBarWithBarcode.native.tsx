import { View } from 'react-native';
import CustomSearchBar from './CustomSearchBar.native';
import BarcodeScannerButton from '../../custom/BarcodeScanner/BarcodeScannerButton.native';
import { styles } from './CustomSearchBarStyles.native';

const CustomSearchBarWithBarcode = () => {
  return (
    <View style={styles.searchContainerWithBarcode}>
      <CustomSearchBar />
      <BarcodeScannerButton />
    </View>
  );
};

export default CustomSearchBarWithBarcode;