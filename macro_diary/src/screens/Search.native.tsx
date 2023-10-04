import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import useReactNavigation from '../navigation/hooks/useReactNavigation.native';
import StandardLayout from "../components/general/Layouts/StandardLayout.native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeScanner from '../components/custom/BarcodeScanner/BarcodeScanner.native';
import ScannedItemSearch from '../components/custom/ScannedItem/ScannedItemSearch.native';
import Condition from '../components/general/Condition.native';
import Spacing from '../components/general/Spacing.native';
import useGetTheme from '../styles/hooks/useGetTheme.native';
import { ProductDataType } from '../utils/CustomTypes.native';
import Button from '../components/general/Buttons/Button.native';
import { ScreenEnum } from '../utils/CustomEnums.native';

const Search = () => {
  const theme = useGetTheme();
  const navigation = useReactNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  // TODO: Move to redux
  const [barcodes, setBarcodes] = useState<string[]>([]);
  const [productData, setProductData] = useState<ProductDataType[]>([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  // TODO: Move to redux
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  // TODO: test hasPermission text
  if (hasPermission === null) {
    return <Text style={{ color: theme.midGrey }}>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text style={{ color: theme.midGrey }}>No access to camera</Text>;
  }
  return (
    <StandardLayout>
      <ScannedItemSearch items={productData} />
      <Spacing height={20} />
      <Button title="test" style={{ width: 50, height: 50, position: 'absolute', bottom: 50, left: 10, backgroundColor: 'red', borderRadius: 5 }} onPress={() => navigation.navigate(ScreenEnum.Diary)}/>
      <Condition condition={hasPermission && showCamera}>
        <BarcodeScanner 
          setShowBarcodeScanner={setShowCamera} 
          barcodes={barcodes}
          productData={productData}
          setBarcodes={setBarcodes}
          setProductData={setProductData}
        />
      </Condition>
    </StandardLayout>
  );
};

export default Search;