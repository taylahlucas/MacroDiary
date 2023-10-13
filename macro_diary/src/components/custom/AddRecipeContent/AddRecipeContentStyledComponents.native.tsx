import styled from 'styled-components/native';

interface AddRecipeContentContainerProps {
  backgroundColor: string;
}

export const AddRecipeContentContainer = styled.View<AddRecipeContentContainerProps>`
  height: 70%; 
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
  margin-left: 32px;
  margin-right: 32px;
`;