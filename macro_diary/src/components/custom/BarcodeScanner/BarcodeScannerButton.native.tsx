import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { BarcodeScannerButtonContainer } from './BarcodeScannerStyledComponents.native';
import Icon from 'react-native-vector-icons/Ionicons';

interface BarcodeScannerButtonProps {
  showCamera: boolean;
  setShowCamera: (value: boolean) => void;
}

const BarcodeScannerButton = ({ showCamera, setShowCamera }: BarcodeScannerButtonProps) => {
  const theme = useGetTheme();
  
  return (
    <BarcodeScannerButtonContainer
      backgroundColor={theme.primaryPurple}
      onPress={(): void => setShowCamera(!showCamera)}
    >
      {/* // TODO: Fix centering */}
      <Icon style={{ textAlign: 'center', marginLeft: 3 }} name={'barcode-outline'} color={'white'} size={32} />
    </BarcodeScannerButtonContainer>
  );
};

export default BarcodeScannerButton;