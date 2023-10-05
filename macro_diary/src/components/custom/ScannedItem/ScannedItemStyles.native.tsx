import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 32,
    marginRight: 8,
    marginLeft: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  scrollContainer: {
    width: 350,
    borderRadius: 5,
    alignSelf: 'center'
  },
  container: {
    width: 350, 
    padding: 16,
    marginTop: -12,
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