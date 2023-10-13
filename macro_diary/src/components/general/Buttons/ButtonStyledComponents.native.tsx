import styled from 'styled-components/native';

interface ExitButtonProps {
  backgroundColor: string;
}

export const ExitButtonContainer = styled.Pressable<ExitButtonProps>`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  background-color: ${props => props.backgroundColor};
  justify-content: center;
`;