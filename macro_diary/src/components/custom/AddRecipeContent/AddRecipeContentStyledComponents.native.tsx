import ScrollableList from '@components/general/List/ScrollableList.native';
import styled from 'styled-components/native';
import { DEFAULT_BORDER_RADIUS } from '@utils/Constants.native';
import StyledText from '@components/general/Text/StyledText.native';

interface AddRecipeContentContainerProps {
  color: string;
}

export const AddRecipeContainer= styled.View<AddRecipeContentContainerProps>`
  height: 70%; 
  background-color: ${(props): string => props.color};  
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const AddRecipeContentContainer = styled.View`
  margin-left: 16px;
  margin-right: 16px;
  height: 500px;
`;

export const AddRecipeContentInnerContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const AddRecipeContentServiceSizeDropdown = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AddRecipeContentServingSizeDropdownContainer = styled.View<AddRecipeContentContainerProps>`
  width: 45px;
  height: 35px;
  background-color: ${(props): string => props.color};
  position: absolute;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  top: -10px;
  padding-left: 4px;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
`;

// TODO: Add box shadow
export const AddRecipeContentServingSizeContainer = styled(ScrollableList)<AddRecipeContentContainerProps>`
  width: 45px;
  height: 100px;
  background-color: ${(props): string => props.color};
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  position: absolute;
  margin-top: 32px;
  padding-top: 8px;
  margin-bottom: 8px;
  z-index: -1;
`;

export const AddRecipeContentIngredientsContainer = styled.View<AddRecipeContentContainerProps>`
  background-color: ${(props) => props.color};  
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  height: 130px;
`;

export const AddRecipeContentIngredientTitle = styled(StyledText)`
  width: 100%;
  padding: 8px;
`;