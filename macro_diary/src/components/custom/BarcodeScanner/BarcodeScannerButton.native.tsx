import { useEffect } from 'react';
import { Dispatch } from 'redux';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { BarcodeScannerButtonContainer } from './BarcodeScannerStyledComponents.native';
import Icon from 'react-native-vector-icons/Ionicons';
import useMainDispatch from '../../../redux/hooks/useMainDispatch.native';
import useMainState from '../../../redux/hooks/useMainState.native';
import { useAppDispatch } from '../../../redux/store.native';
import { MainActions } from '../../../redux/MainState.native';
import { useDispatch } from 'react-redux';

const BarcodeScannerButton = () => {
  const theme = useGetTheme();
  //: Dispatch<MainActions>
  const dispatch = useDispatch();
  const { setShowCamera } = useMainDispatch();
  const { showCamera } = useMainState();

  useEffect(() => {
    console.log("CAMERA: ", setShowCamera(true))
    console.log("TEST: ", showCamera)
  });

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