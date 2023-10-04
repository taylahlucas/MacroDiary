import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigatorParams } from './StackNavigatorParams.native';
import { ScreenEnum } from '../utils/CustomEnums.native';
import useDefaultHeaderOptions from './hooks/useDefaultHeaderOptions.native';
import Home from '../screens/Home.native';
import Diary from '../screens/Diary.native';

const Stack = createNativeStackNavigator<StackNavigatorParams>();

const StackNavigator: React.FunctionComponent = (): JSX.Element => {
  const headerOptions = useDefaultHeaderOptions();

  return (
    <Stack.Navigator initialRouteName={ScreenEnum.Home} screenOptions={headerOptions}>
      <Stack.Screen
        name={ScreenEnum.Home}
        component={Home}
      />
      <Stack.Screen
        name={ScreenEnum.Diary}
        component={Diary}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;