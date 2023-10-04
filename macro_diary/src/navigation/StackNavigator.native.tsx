import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigatorParams } from './StackNavigatorParams.native';
import { ScreenEnum } from '../utils/CustomEnums.native';
import useDefaultHeaderOptions from './hooks/useDefaultHeaderOptions.native';
import Search from '../screens/Search.native';
import Diary from '../screens/Diary.native';

const Stack = createNativeStackNavigator<StackNavigatorParams>();

const StackNavigator: React.FunctionComponent = (): JSX.Element => {
  const headerOptions = useDefaultHeaderOptions();

  return (
    <Stack.Navigator initialRouteName={ScreenEnum.Search} screenOptions={headerOptions}>
      <Stack.Screen
        name={ScreenEnum.Search}
        component={Search}
      />
      <Stack.Screen
        name={ScreenEnum.Diary}
        component={Diary}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;