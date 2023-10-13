import { View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from './BarcodeScannerStyles.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import BarcodeScannerOverlay from './BarcodeScannerOverlay.native';
import useMainDispatch from '../../../redux/hooks/useMainDispatch.native';
import useHandleBarcodeScanned from './hooks/useHandleBarcodeScanned.native';
import ExitButton from '../../general/Buttons/ExitButton.native';

const BarcodeScanner = () => {
  const theme = useGetTheme();
  const { setShowCamera } = useMainDispatch();
  const { handleBarCodeScanned  } = useHandleBarcodeScanned()

  return (
    <View style={styles.container}>
      {/* TODO: Change to icon button */}
      <ExitButton onPress={(): void => setShowCamera(false)} />
      <BarcodeScannerOverlay />
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.barcodeScanner}
      />
    </View>
  );
};

export default BarcodeScanner;