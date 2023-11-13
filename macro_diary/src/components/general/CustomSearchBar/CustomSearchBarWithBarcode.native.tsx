import { View } from 'react-native';
import CustomSearchBar, { CustomSearchBarProps } from './CustomSearchBar.native';
import BarcodeScannerButton from '@components/custom/BarcodeScanner/BarcodeScannerButton.native';
import { styles } from './CustomSearchBarStyles.native';

const CustomSearchBarWithBarcode = ({ placeholder }: CustomSearchBarProps) => {
  return (
    <View style={styles.searchContainerWithBarcode}>
      <CustomSearchBar placeholder={placeholder} />
      <BarcodeScannerButton />
    </View>
  );
};

export default CustomSearchBarWithBarcode;