import { useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import useMainDispatch from '../../redux/hooks/useMainDispatch.native';

const useGetBarcodeScannerPermissions = () => {
  const { setHasBarcodeScannerPermission } = useMainDispatch();
  
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasBarcodeScannerPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);
}

export default useGetBarcodeScannerPermissions;