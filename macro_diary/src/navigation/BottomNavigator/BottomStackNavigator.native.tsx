import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddRecipeModal from '@screens/AddRecipeModal.native';

const Stack = createNativeStackNavigator();

const BottomStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Add Recipe'} component={AddRecipeModal} options={{ headerShown: false, presentation: 'transparentModal' }} />
    </Stack.Navigator>
  );
};

export default BottomStackNavigator;