import { View, Alert } from 'react-native';
import axios from 'axios';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Button from '../../general/Buttons/Button.native';
import { styles } from './BarcodeScannerStyles.native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { ProductDataType } from '../../../utils/CustomTypes.native';
import BarcodeScannerOverlay from './BarcodeScannerOverlay.native';

interface BarCodeScannedParams {
  type: string;
  data: string;
}

interface BarcodeScannerProps {
  setShowBarcodeScanner: (value: boolean) => void;
  barcodes: string[];
  productData: ProductDataType[];
  setBarcodes: (value: string[]) => void;
  setProductData: (data: ProductDataType[]) => void;
}

const BarcodeScanner = ({ setShowBarcodeScanner, barcodes, productData, setBarcodes, setProductData }: BarcodeScannerProps) => {
  const theme = useGetTheme();

  // TODO: Move these to custom hooks
  const handleBarCodeScanned = ({ type, data }: BarCodeScannedParams) => {
    setShowBarcodeScanner(false);
    setBarcodes([...barcodes, data]);
    if (!!barcodes.find((item) => item === data)) {
      Alert.alert('Product already scanned');
    }
    else {
      getInformation(data);
    }
  };

  const getInformation = (data: string) => {
    axios.get(`https://world.openfoodfacts.org/api/v2/product/${data}`)
      .then(async (response) => {
        const nutrientData = await response.data['product']['nutriments'];
        if (!!nutrientData) {
          const mappedData: ProductDataType = {
            barcode: data,
            title: response.data['product']['product_name'],
            macros: {
              calories: nutrientData['energy-kcal_100g'],
              carbohydrates: nutrientData['carbohydrates_100g'],
              fat: nutrientData['fat_100g'],
              protein: nutrientData['proteins_100g'],
              salt: nutrientData['salt_100g'],
              saturatedFat: nutrientData['saturated-fat_100g'],
              sodium: nutrientData['sodium_100g'],
              sugar: nutrientData['sugars_100g']
            }
          }
          setProductData([...productData, mappedData]);
        }
      })
      .catch(function(error) {
        console.log("Error scanning product: ", error.message)
        Alert.alert('Cannot find product');
      })
  };

  return (
    <View style={styles.container}>
      {/* TODO: Change to icon button */}
      <Button 
        title={'x'} 
        onPress={(): void => setShowBarcodeScanner(false)}
        style={{...styles.exitButton, backgroundColor: theme.textOnBg, justifyContent: 'center' }}  
      />
      <BarcodeScannerOverlay />
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.barcodeScanner}
      />
    </View>
  );
};

export default BarcodeScanner;