import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { DEFAULT_BORDER_RADIUS } from '@utils/Constants.native';

interface TabNavigatorContainerProps {
  color: string;
};

export const TabNavigatorContainer = styled(SafeAreaView)<TabNavigatorContainerProps>`
  height: 100px;
  background-color: ${props => props.color};
  flex-direction: row;
  justify-content: space-evenly;
`;

export const BottomTabNavigatorIconBackground = styled.View<TabNavigatorContainerProps>`
  height: 25px;
  width: 25px;
  z-index: -1;
  border-radius: ${DEFAULT_BORDER_RADIUS}px;
  position: absolute;
  align-self: center;
  background-color: ${props => props.color};
`;