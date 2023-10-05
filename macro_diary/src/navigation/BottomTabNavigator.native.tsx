import React from 'react';
import { View, Pressable, SafeAreaView } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import useGetTheme from '../styles/hooks/useGetTheme.native';
import Icon from '../components/general/Icon/Icon.native';
import { TabEnum } from '../utils/CustomEnums.native';
import Condition from '../components/general/Condition.native';

const BottomTabNavigator = ({ state, descriptors, navigation }: BottomTabBarProps): JSX.Element => {
  const theme = useGetTheme();

  // TODO: Purple when selected && move to StyledComponents
  return (
    <SafeAreaView style={{ 
      height: 100, 
      backgroundColor: theme.darkGrey, 
      flexDirection: 'row', 
      justifyContent: 'space-evenly'
    }}>
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
                <View 
                  style={{ 
                    height: 25, 
                    width: 25, 
                    zIndex: -1,
                    borderRadius: 10,
                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: theme.lightestGrey 
                  }}
                />
              </>
            </Condition>
          </Pressable>
        )
      })}
    </SafeAreaView>
  )
};

export default BottomTabNavigator;