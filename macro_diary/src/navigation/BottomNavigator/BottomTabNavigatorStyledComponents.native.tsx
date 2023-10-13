import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

interface TabNavigatorContainerProps {
  backgroundColor: string;
};

export const TabNavigatorContainer = styled(SafeAreaView)<TabNavigatorContainerProps>`
  height: 100px;
  background-color: ${props => props.backgroundColor};
  flex-direction: row;
  justify-content: space-evenly;
`;

export const BottomTabNavigatorIconBackground = styled.View<TabNavigatorContainerProps>`
  height: 25px;
  width: 25px;
  z-index: -1;
  border-radius: 10px;
  position: absolute;
  align-self: center;
  background-color: ${props => props.backgroundColor};
`;