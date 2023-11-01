import styled from 'styled-components/native';
import { DEFAULT_CIRCLE_RADIUS } from '@utils/Constants.native';

interface ExitButtonProps {
  color: string;
}

export const ExitButtonContainer = styled.Pressable<ExitButtonProps>`
  width: 30px;
  height: 30px;
  border-radius: ${DEFAULT_CIRCLE_RADIUS}px;
  background-color: ${props => props.color};
  justify-content: center;
`;