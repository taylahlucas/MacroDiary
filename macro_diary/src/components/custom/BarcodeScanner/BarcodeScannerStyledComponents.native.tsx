import styled from 'styled-components/native';
import { DEFAULT_CIRCLE_RADIUS } from '@utils/Constants.native';

interface BarcodeScannerButtonContainerProps {
  color: string;
};

export const BarcodeScannerButtonContainer = styled.Pressable<BarcodeScannerButtonContainerProps>`
  background-color: ${props => props.color};
  height: 48px;
  width: 48px;
  border-radius: ${DEFAULT_CIRCLE_RADIUS}px;
  justify-content: center;
  align-items: center;
`;

export const BarcodeScannerExitButton = styled.View`
  position: absolute;
  right: 16px;
  top: 16px; 
  z-index: 2;
`;