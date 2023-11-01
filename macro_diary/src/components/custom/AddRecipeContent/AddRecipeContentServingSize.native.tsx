import { View } from 'react-native';
import StyledText from '@components/general/Text/StyledText.native';
import Dropdown from '@components/general/Dropdown/Dropdown.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import AddRecipeContentServingSizeOptions from './AddRecipeContentServingSizeOptions.native';

const AddRecipeContentServingSize = () => {
  const theme = useGetTheme();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <StyledText type={'ListItemSubTitleBold'}>serving size</StyledText>
      <Dropdown
        header={
          <View style={{ width: 20, height: 20, backgroundColor: theme.midGrey}} />
        }
      >
        <AddRecipeContentServingSizeOptions />
      </Dropdown>
    </View>
  );
};

export default AddRecipeContentServingSize;