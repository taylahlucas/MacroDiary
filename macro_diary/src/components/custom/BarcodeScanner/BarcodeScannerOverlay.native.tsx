import { View } from 'react-native';
import { styles } from './BarcodeScannerStyles.native';

const BarcodeScannerOverlay = () => {
  return (
    <>
      <View style={styles.overlayTop} />
      <View style={styles.overlayBottom} />
      <View style={styles.overlayLeft} />
      <View style={styles.overlayRight} />
    </>
  );
};

export default BarcodeScannerOverlay;