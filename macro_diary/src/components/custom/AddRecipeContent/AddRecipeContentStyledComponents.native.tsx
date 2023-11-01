import ScrollableList from '@components/general/List/ScrollableList.native';
import styled from 'styled-components/native';
import { DEFAULT_BORDER_RADIUS } from '@utils/Constants.native';

interface AddRecipeContentContainerProps {
  backgroundColor: string;
}

export const AddRecipeContainer= styled.View<AddRecipeContentContainerProps>`
  height: 70%; 
  background-color: ${props => props.backgroundColor};
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const AddRecipeContentContainer = styled.View`
  marginLeft: 16px;
  marginRight: 16px;
  height: 100%;
`;

export const AddRecipeContentServingSizeContainer = styled(ScrollableList)`
  width: 30px;
  height: 30px;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  position: absolute;
  margin-top: 16px;
  margin-bottom: 16px;
`;