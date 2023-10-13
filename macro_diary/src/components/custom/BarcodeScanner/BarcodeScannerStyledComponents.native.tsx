import { Pressable } from 'react-native';
import styled from "styled-components/native";

interface BarcodeScannerButtonContainerProps {
  backgroundColor: string;
};

export const BarcodeScannerButtonContainer = styled.Pressable<BarcodeScannerButtonContainerProps>`
  background-color: ${props => props.backgroundColor};
  height: 48px;
  width: 48px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const BarcodeScannerExitButton = styled.View`
  position: absolute;
  right: 16px;
  top: 16px; 
  z-index: 2;
`;