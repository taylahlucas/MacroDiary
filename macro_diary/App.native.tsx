import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/navigation/BottomNavigator/BottomNavigator.native';
import configureStore from './src/redux/store.native';
import ModalNavigator from './src/navigation/ModalNavigator/ModalNavigator.native';
import { Modal, View } from 'react-native';

const store = configureStore;

const App = () => {  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
        <ModalNavigator />
        {/* <Modal 
          animationType="slide"
          // statusBarTranslucent={true}
          // presentationStyle='formSheet'
          transparent={true}
          style={{ backgroundColor: 'transparent', opacity: 0.2, flex: 1, width: 100, height: 100 }}
        >
        <View style={{ backgroundColor: 'red', width: 100, height: 100 }} />
      </Modal> */}
      </NavigationContainer>
    </Provider>
  );
}

export default App;