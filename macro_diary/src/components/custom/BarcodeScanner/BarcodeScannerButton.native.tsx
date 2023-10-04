import { View } from 'react-native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import Button from '../../general/Buttons/Button.native';
import { styles } from "./BarcodeScannerStyles.native";

interface BarcodeScannerButtonProps {
  showCamera: boolean;
  setShowCamera: (value: boolean) => void;
}

const BarcodeScannerButton = ({ showCamera, setShowCamera }: BarcodeScannerButtonProps) => {
  const theme = useGetTheme();
  
  return (
    <View style={styles.barcodeButtonContainer}>
      <Button 
        title={'Scan barcode'} 
        onPress={(): void => setShowCamera(!showCamera)}
        style={{...styles.barcodeButton, backgroundColor: theme.darkGrey }}
      />
    </View>
  );
};

export default BarcodeScannerButton;