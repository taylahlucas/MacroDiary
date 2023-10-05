import React from 'react';
import { View, Pressable } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import useGetTheme from '../styles/hooks/useGetTheme.native';
import Icon from '../components/general/Icon/Icon.native';
import { TabEnum } from '../utils/CustomEnums.native';
import Condition from '../components/general/Condition.native';
import { TabNavigatorContainer, BottomTabNavigatorIconBackground } from './BottomTabNavigatorStyledComponents.native'; 

const BottomTabNavigator = ({ state, descriptors, navigation }: BottomTabBarProps): JSX.Element => {
  const theme = useGetTheme();
  
  // TODO: Purple when selected && move to StyledComponents -- fix bgcolor
  return (
    <TabNavigatorContainer backgroundColor={theme.darkGrey}>
      {state.routes.map((route: any, index: number) => {
        return (
          <Pressable 
            style={{ justifyContent: 'center' }}
            onPress={(): void =>  navigation.navigate(route.name)}
          >
            <Condition 
              condition={route.params.id === TabEnum.ADD_RECIPE}
              conditionalElement={
                <Icon 
                  name={route.params.icon}
                  type={route.params.iconType}
                  color={theme.midGrey}
                />
              }
            >
              <>
                <Icon 
                  name={route.params.icon}
                  type={route.params.iconType}
                  size={55}
                  color={theme.primaryPurple }
                />
                <BottomTabNavigatorIconBackground backgroundColor={theme.lightestGrey} />
              </>
            </Condition>
          </Pressable>
        )
      })}
    </TabNavigatorContainer>
  )
};

export default BottomTabNavigator;