import { useEffect } from 'react';
import { Dispatch } from 'redux';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { BarcodeScannerButtonContainer } from './BarcodeScannerStyledComponents.native';
import Icon from 'react-native-vector-icons/Ionicons';
import useMainDispatch from '../../../redux/hooks/useMainDispatch.native';
import useMainState from '../../../redux/hooks/useMainState.native';

const BarcodeScannerButton = () => {
  const theme = useGetTheme();
  const { setShowCamera } = useMainDispatch();
  const { showCamera } = useMainState();
  
  return (
    <BarcodeScannerButtonContainer
      backgroundColor={theme.primaryPurple}
      onPress={(): void => setShowCamera(!showCamera) }
    >
      {/* // TODO: Fix centering */}
      <Icon style={{ textAlign: 'center', marginLeft: 3 }} name={'barcode-outline'} color={'white'} size={32} />
    </BarcodeScannerButtonContainer>
  );
};

export default BarcodeScannerButton;