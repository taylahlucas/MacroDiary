import styled from 'styled-components/native';
import { DEFAULT_BORDER_RADIUS } from '@utils/Constants.native';

interface TextInputContainerProps {
  nameFieldSelected: boolean;
  color: string;
  focusedColor: string;
  textColor: string;
}

export const TextInputContainer = styled.TextInput<TextInputContainerProps>`
  border-bottom-color: ${props => props.nameFieldSelected ? props.focusedColor : props.color};
  border-bottom-width: 2px;
  height: 45px;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  font-size: 16px;
  padding-left: 16px;
  color: ${props => props.textColor}
`;