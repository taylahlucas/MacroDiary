import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/navigation/BottomNavigator/BottomNavigator.native';
import configureStore from './src/redux/store.native';
import ModalNavigator from './src/navigation/ModalNavigator/ModalNavigator.native';

const store = configureStore;

const App = () => {  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
        <ModalNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;