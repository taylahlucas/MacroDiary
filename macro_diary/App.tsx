import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator.native';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store.native';

const store = configureStore;

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;