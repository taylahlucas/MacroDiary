import ScrollableList from '@components/general/List/ScrollableList.native';
import styled from 'styled-components/native';
import { DEFAULT_BORDER_RADIUS } from '@utils/Constants.native';

type AddRecipeContentContainerProps = {
  color: string;
}

export const AddRecipeContainer= styled.View<AddRecipeContentContainerProps>`
  height: 70%; 
  background-color: ${(props) => props.color};  
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const AddRecipeContentContainer = styled.View`
  marginLeft: 16px;
  marginRight: 16px;
  height: 100%;
`;

export const AddRecipeContentServiceSizeDropdown = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AddRecipeContentServingSizeDropdownContainer = styled.View<AddRecipeContentContainerProps>`
  width: 45px;
  height: 35px;
  background-color: ${props => props.color};
  position: absolute;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  top: -10px;
  padding-left: 4px;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
`;

export const AddRecipeContentServingSizeContainer = styled(ScrollableList)<AddRecipeContentContainerProps>`
  width: 45px;
  height: 100px;
  background-color: ${props => props.color};
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  position: absolute;
  margin-top: 32px;
  padding-top: 8px;
  margin-bottom: 8px;
  z-index: -1;
`;