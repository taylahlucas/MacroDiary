import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    width: 350,
    borderRadius: 10,
    marginBottom: 16,
    alignSelf: 'center'
  },
  container: {
    // TODO: Make dynmic based on screen size & make this slightly thinner
    width: 325,
    padding: 16,
    marginTop: -32,
    marginBottom: 16,
    borderRadius: 5
  },
  title: {
    marginLeft: 16
  },
  chartContainer: {
    alignItems: 'center'
  },
  itemContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }
});