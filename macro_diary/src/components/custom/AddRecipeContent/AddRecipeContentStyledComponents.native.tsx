import styled from 'styled-components/native';

interface AddRecipeContentContainerProps {
  backgroundColor: string;
}

export const AddRecipeContainer= styled.View<AddRecipeContentContainerProps>`
  height: 70%; 
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const AddRecipeContentContainer = styled.View`
  marginLeft: 16px;
  marginRight: 16px;
  height: 100%;
`;