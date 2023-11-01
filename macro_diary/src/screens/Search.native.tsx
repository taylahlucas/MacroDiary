import React from 'react';
import { Text } from 'react-native';
import StandardLayout from "@components/general/Layouts/StandardLayout.native";
import BarcodeScanner from '@components/custom/BarcodeScanner/BarcodeScanner.native';
import ScannedItemSearch from '@components/custom/ScannedItem/ScannedItemSearch.native';
import ScannedItemList from '@components/custom/ScannedItem/ScannedItemList.native';
import Condition from '@components/general/Condition.native';
import Spacing from '@components/general/Spacing.native';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import useMainState from '@redux/hooks/useMainState.native';
import useGetBarcodeScannerPermissions from '@utils/hooks/useGetBarcodeScannerPermissions.native';

const Search = () => {
  const theme = useGetTheme();
  const { hasBarcodeScannerPermission, showCamera } = useMainState();

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
      <ScannedItemSearch />
      <ScannedItemList />
      <Spacing height={20} />
      <Condition condition={hasBarcodeScannerPermission && showCamera}>
        <BarcodeScanner />
      </Condition>
    </StandardLayout>
  );
};

export default Search;