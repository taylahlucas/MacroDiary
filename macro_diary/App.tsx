import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator.native';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;