import React from 'react';
import { Text } from 'react-native';
import useReactNavigation from '../navigation/hooks/useReactNavigation.native';
import StandardLayout from "../components/general/Layouts/StandardLayout.native";
import BarcodeScanner from '../components/custom/BarcodeScanner/BarcodeScanner.native';
import ScannedItemSearch from '../components/custom/ScannedItem/ScannedItemSearch.native';
import Condition from '../components/general/Condition.native';
import Spacing from '../components/general/Spacing.native';
import useGetTheme from '../styles/hooks/useGetTheme.native';
import Button from '../components/general/Buttons/Button.native';
import { ScreenEnum } from '../utils/CustomEnums.native';
import useMainState from '../redux/hooks/useMainState.native';
import useMainDispatch from '../redux/hooks/useMainDispatch.native';
import useGetBarcodeScannerPermissions from '../utils/hooks/useGetBarcodeScannerPermissions.native';

const Search = () => {
  const theme = useGetTheme();
  const navigation = useReactNavigation();
  const { setBarcodes, setProductData, setSelectedSearchTableIndex } = useMainDispatch();
  const { hasBarcodeScannerPermission, showCamera, barcodes, productData, selectedSearchTableIndex } = useMainState();

  useGetBarcodeScannerPermissions();

  // TODO: test hasPermission text
  if (hasBarcodeScannerPermission === null) {
    return <Text style={{ color: theme.midGrey }}>Requesting for camera permission</Text>;
  }
  if (hasBarcodeScannerPermission === false) {
    return <Text style={{ color: theme.midGrey }}>No access to camera</Text>;
  }
  return (
    <StandardLayout>
      <ScannedItemSearch items={productData} />
      <Spacing height={20} />
      <Condition condition={hasBarcodeScannerPermission && showCamera}>
        <BarcodeScanner 
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