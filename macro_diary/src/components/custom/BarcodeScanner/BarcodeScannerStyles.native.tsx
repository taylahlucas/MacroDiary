import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { 
    width: '100%', 
    height: 500, 
    position: 'absolute', 
    bottom: 0,
    borderRadius: 5
  },
  barcodeScanner: {
    flex: 1
  },
  overlayTop: {
    height: '40%',
    width: '100%', 
    backgroundColor: 'rgba(52, 52, 52, 0.8)', 
    position: 'absolute', 
    zIndex: 1
  },
  overlayBottom: {
    height: '40%',
    width: '100%', 
    backgroundColor: 'rgba(52, 52, 52, 0.8)', 
    position: 'absolute', 
    zIndex: 1,
    bottom: 0
  },
  overlayRight: {
    height: '20%', 
    width: '20%', 
    top: '40%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    zIndex: 1, 
    right: 0
  },
  overlayLeft: {
    height: '20%', 
    width: '20%', 
    top: '40%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)', 
    justifyContent: 'center', 
    alignItems: 'center', 
    position: 'absolute', 
    zIndex: 1,
    left: 0
  }
});