import React from 'react';
import { Pressable } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import Icon from '@components/general/Icon/Icon.native';
import { TabEnum } from '@utils/CustomEnums.native';
import Condition from '@components/general/Condition.native';
import { TabNavigatorContainer, BottomTabNavigatorIconBackground } from './BottomTabNavigatorStyledComponents.native'; 
import useMainDispatch from '@redux/hooks/useMainDispatch.native';

const BottomTabNavigatorTabBar = ({ state, descriptors, navigation }: BottomTabBarProps): JSX.Element => {
  const theme = useGetTheme();
  const { setShowAddRecipeModal } = useMainDispatch();
  
  // TODO: Purple when selected && move to StyledComponents -- fix bgcolor
  return (
    <TabNavigatorContainer backgroundColor={theme.darkGrey}>
      {state.routes.map((route: any, index: number) => {
        return (
          <Pressable
            key={route.params.id}
            style={{ justifyContent: 'center' }}
            onPress={(): void =>  {
              setShowAddRecipeModal(route.params.id === TabEnum.ADD_RECIPE);
              switch (route.params.id) {
                case TabEnum.ADD_RECIPE:
                  break;
                default: 
                  navigation.navigate(route.name);
                  break;
              }
            }}
          >
            <Condition 
              condition={route.params.id !== TabEnum.ADD_RECIPE}
              conditionalElement={
                <>
                  <Icon 
                    name={route.params.icon}
                    type={route.params.iconType}
                    color={theme.primaryPurple}
                    size={55}
                  />
                  <BottomTabNavigatorIconBackground backgroundColor={theme.lightestGrey} />
                </>
              }
            >
              <Icon 
                name={route.params.icon}
                type={route.params.iconType}
                color={theme.midGrey}
              />
            </Condition>
          </Pressable>
        )
      })}
    </TabNavigatorContainer>
  )
};

export default BottomTabNavigatorTabBar;