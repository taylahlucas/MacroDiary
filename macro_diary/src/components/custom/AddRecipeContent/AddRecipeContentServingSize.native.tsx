import { View } from 'react-native';
import StyledText from '@components/general/Text/StyledText.native';
import Dropdown from '@components/general/Dropdown/Dropdown.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import AddRecipeContentServingSizeOptions from './AddRecipeContentServingSizeOptions.native';
import Icon from '@components/general/Icon/Icon.native';
import { IconTypeEnum } from '@utils/CustomEnums.native';
import { 
  AddRecipeContentServiceSizeDropdown,
  AddRecipeContentServingSizeDropdownContainer 
} from './AddRecipeContentStyledComponents.native';

const AddRecipeContentServingSize = () => {
  const theme = useGetTheme();
  
  return (
    <AddRecipeContentServiceSizeDropdown>
      <StyledText type={'ListItemSubTitleBold'}>serving size</StyledText>
      <Dropdown
        header={
          <AddRecipeContentServingSizeDropdownContainer color={theme.darkGrey}>
            <StyledText color={theme.lightGrey} type={'ListItemSubTitle'}>1</StyledText>
            <Icon type={IconTypeEnum.Ionicons} name={'chevron-down-outline'} size={20} color={theme.midGrey} />
          </AddRecipeContentServingSizeDropdownContainer>
        }
      >
        <AddRecipeContentServingSizeOptions />
      </Dropdown>
    </AddRecipeContentServiceSizeDropdown>
  );
};

export default AddRecipeContentServingSize;