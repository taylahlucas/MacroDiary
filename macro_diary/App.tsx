import { SafeAreaView } from 'react-native';
import Home from './src/screens/Home.native';
// import useGetTheme from '../styles/hooks/useGetTheme.native';
// import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from '../navigation/StackNavigator.native';

const App = () => {

  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
    // <NavigationContainer>
    //   <StackNavigator />
    // </NavigationContainer>
  );
}

export default App;