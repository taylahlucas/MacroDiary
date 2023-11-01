import useGetTheme from '@styles/hooks/useGetTheme.native';
import { BarcodeScannerButtonContainer } from './BarcodeScannerStyledComponents.native';
import Icon from '@components/general/Icon/Icon.native';
import useMainDispatch from '@redux/hooks/useMainDispatch.native';
import useMainState from '@redux/hooks/useMainState.native';
import { IconTypeEnum } from '@utils/CustomEnums.native';

const BarcodeScannerButton = () => {
  const theme = useGetTheme();
  const { setShowCamera } = useMainDispatch();
  const { showCamera } = useMainState();
  
  return (
    <BarcodeScannerButtonContainer
      color={theme.primaryPurple}
      onPress={(): void => setShowCamera(!showCamera) }
    >
      <Icon type={IconTypeEnum.Ionicons} name={'barcode-outline'} color={'white'} size={32} />
    </BarcodeScannerButtonContainer>
  );
};

export default BarcodeScannerButton;