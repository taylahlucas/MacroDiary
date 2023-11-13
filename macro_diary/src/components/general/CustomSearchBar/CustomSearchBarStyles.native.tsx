import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    height: 45, 
    width: '80%',
    marginRight: 16,
    borderRadius: 5,
    justifyContent: 'center'
  },
  searchContainerWithBarcode: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  searchBarIcon: {
    position: 'absolute',
    marginLeft: 16
  },
  textInput: {
    marginLeft: 48,
    marginRight: 16,
    fontSize: 17
  },
});