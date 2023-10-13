import { View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from './BarcodeScannerStyles.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import BarcodeScannerOverlay from './BarcodeScannerOverlay.native';
import useMainDispatch from '../../../redux/hooks/useMainDispatch.native';
import useHandleBarcodeScanned from './hooks/useHandleBarcodeScanned.native';
import ExitButton from '../../general/Buttons/ExitButton.native';
import { BarcodeScannerExitButton } from './BarcodeScannerStyledComponents.native';

const BarcodeScanner = () => {
  const { setShowCamera } = useMainDispatch();
  const { handleBarCodeScanned  } = useHandleBarcodeScanned()

  return (
    <View style={styles.container}>
      <BarcodeScannerExitButton>
        <ExitButton onPress={(): void => setShowCamera(false)} />
      </BarcodeScannerExitButton>
      <BarcodeScannerOverlay />
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.barcodeScanner}
      />
    </View>
  );
};

export default BarcodeScanner;