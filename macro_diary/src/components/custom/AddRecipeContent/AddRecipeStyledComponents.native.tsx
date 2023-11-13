import { StyleSheet } from 'react-native';
import ScrollableList from '@components/general/List/ScrollableList.native';
import styled from 'styled-components/native';
import { DEFAULT_BORDER_RADIUS } from '@utils/Constants.native';
import StyledText from '@components/general/Text/StyledText.native';
import IconButton from '@components/general/Buttons/IconButton.native';

export const style = StyleSheet.create({
  servingSizeList: {
    width: 30,
    paddingBottom: 32
  },
  ingredientsList: {
    width: '100%',
    marginTop: -8,
    paddingBottom: 32
  },
  // TODO: Not working
  boxShadow: {
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 10
    },
    elevation: 5,
    shadowOpacity: 5,
    shadowRadius: 20
  }
})

interface AddRecipeContainerProps {
  backgroundColor: string;
}

export const AddRecipeContainer= styled.View<AddRecipeContainerProps>`
  height: 70%; 
  background-color: ${(props): string => props.backgroundColor};  
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const AddRecipeContentContainer = styled.View`
  margin-left: 16px;
  margin-right: 16px;
  height: 500px;
`;

export const AddRecipeInnerContainer = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  height: 300px;
`;

export const AddRecipeServiceSizeDropdown = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AddRecipeServingSizeDropdownContainer = styled.View<AddRecipeContainerProps>`
  width: 45px;
  height: 25px;
  position: absolute;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
`;

// TODO: Add box shadow
export const AddRecipeServingSizeContainer = styled(ScrollableList)<AddRecipeContainerProps>`
  width: 45px;
  height: 100px;
  background-color: red;
  background-color: ${(props): string => props.backgroundColor};
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  position: absolute;
  margin-top: 24px;
  padding-top: 8px;
  margin-bottom: 8px;
`;

export const AddRecipeServingSizeItem = styled.Pressable`
  width: 60px;
  height: 30px;
  margin-top: 10px;
`;

export const AddRecipeIngredientsContainer = styled.View<AddRecipeContainerProps>`
  flex-direction: column;
  z-index: -1;
`;

export const AddRecipeIngredientItemContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 6px;
`;

export const AddRecipeIngredientsInnerContainer = styled.View<AddRecipeContainerProps>`
  background-color: ${(props) => props.backgroundColor};  
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  height: 130px;
`;

export const AddRecipeIngredientTitle = styled(StyledText)`
  padding-bottom: 16px;
`;

export const AddRecipeIngredientItem = styled(StyledText)`
  width: 60%;
`;

export const AddRecipeSubmitButtonBgContainer = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const AddRecipeSubmitButtonBg = styled.View<AddRecipeContainerProps>`
  height: 20px;
  width: 20px;
  z-index: -1;
  border-radius: 25px;
  position: absolute;
  background-color: ${(props) => props.backgroundColor};
`;