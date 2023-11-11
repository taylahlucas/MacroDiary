import { View } from 'react-native';
import { 
  AddRecipeSubmitButtonBg,
  AddRecipeSubmitButtonBgContainer
} from './AddRecipeStyledComponents.native';
import useMainDispatch from '@redux/hooks/useMainDispatch.native';
import IconButton from '@components/general/Buttons/IconButton.native';
import { IconTypeEnum } from '@utils/CustomEnums.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';

const AddRecipeButtons = () => {
  const theme = useGetTheme();
  const { setShowAddRecipeModal } = useMainDispatch();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <AddRecipeSubmitButtonBgContainer>
        <IconButton
          name={'add-circle'}
          size={50}
          color={theme.primaryPurple}
          onPress={() => null}
        />
        <AddRecipeSubmitButtonBg backgroundColor={'white'} />
      </AddRecipeSubmitButtonBgContainer>

      <AddRecipeSubmitButtonBgContainer>
        <IconButton
          name={'cancel'}
          type={IconTypeEnum.MaterialIcons}
          size={50}
          color={theme.darkGrey}
          onPress={(): void => setShowAddRecipeModal(false)} 
        />
        <AddRecipeSubmitButtonBg backgroundColor={theme.midGrey} />
      </AddRecipeSubmitButtonBgContainer>
    </View>
  );
};

export default AddRecipeButtons;