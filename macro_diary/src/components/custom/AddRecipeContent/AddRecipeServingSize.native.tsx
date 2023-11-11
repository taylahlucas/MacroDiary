import StyledText from '@components/general/Text/StyledText.native';
import Dropdown from '@components/general/Dropdown/Dropdown.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import AddRecipeServingSizeOptions from './AddRecipeServingSizeOptions.native';
import Icon from '@components/general/Icon/Icon.native';
import { IconTypeEnum } from '@utils/CustomEnums.native';
import {
  AddRecipeServiceSizeDropdown,
  AddRecipeServingSizeDropdownContainer 
} from './AddRecipeStyledComponents.native';
import useAddRecipeState from './hooks/useAddRecipeState.native';

const AddRecipeServingSize = () => {
  const theme = useGetTheme();
  const { servingSize } = useAddRecipeState();
  
  return (
    <AddRecipeServiceSizeDropdown>
      <StyledText type={'ListItemSubTitle'}>serving size</StyledText>
      <Dropdown
        header={
          <AddRecipeServingSizeDropdownContainer backgroundColor={theme.black}>
            <StyledText color={theme.lightGrey} type={'ListItemSubTitle'}>{servingSize.toString()}</StyledText>
            <Icon type={IconTypeEnum.Ionicons} name={'chevron-down-outline'} size={20} color={theme.midGrey} />
          </AddRecipeServingSizeDropdownContainer>
        }
      >
        <AddRecipeServingSizeOptions />
      </Dropdown>
    </AddRecipeServiceSizeDropdown>
  );
};

export default AddRecipeServingSize;