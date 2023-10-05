import { View, Alert } from 'react-native';
import axios from 'axios';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Button from '../../general/Buttons/Button.native';
import { styles } from './BarcodeScannerStyles.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { ProductDataType } from '../../../utils/CustomTypes.native';
import BarcodeScannerOverlay from './BarcodeScannerOverlay.native';
import useMainDispatch from '../../../redux/hooks/useMainDispatch.native';
import useHandleBarcodeScanned from './hooks/useHandleBarcodeScanned.native';

interface BarCodeScannedParams {
  type: string;
  data: string;
}

interface BarcodeScannerProps {
  barcodes: string[];
  productData: ProductDataType[];
  setBarcodes: (value: string[]) => void;
  setProductData: (data: ProductDataType[]) => void;
}

const BarcodeScanner = ({ barcodes, productData, setBarcodes, setProductData }: BarcodeScannerProps) => {
  const theme = useGetTheme();
  const { setShowCamera } = useMainDispatch();
  const { handleBarCodeScanned } = useHandleBarcodeScanned()

  return (
    <View style={styles.container}>
      {/* TODO: Change to icon button */}
      <Button 
        title={'x'} 
        onPress={(): void => setShowCamera(false)}
        style={{...styles.exitButton, backgroundColor: theme.midGrey, justifyContent: 'center' }}  
      />
      <BarcodeScannerOverlay />
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.barcodeScanner}
      />
    </View>
  );
};

export default BarcodeScanner;