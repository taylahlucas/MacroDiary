import { Alert } from 'react-native';
import axios from 'axios';
import useMainDispatch from '@redux/hooks/useMainDispatch.native';
import useMainState from '@redux/hooks/useMainState.native';
import { Product } from '@utils/CustomTypes.native';

interface BarCodeScannedParams {
  type: string;
  data: string;
}

const useHandleBarcodeScanned = () => {
  const { setShowCamera, setBarcodes, setProductData } = useMainDispatch();
  const { barcodes, productData } = useMainState();

  const handleBarCodeScanned = ({ type, data }: BarCodeScannedParams) => {
    setShowCamera(false);
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
          const mappedData: Product = {
            // TODO: Test id
            id: response.data['id'],
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

  return { handleBarCodeScanned };
}

export default useHandleBarcodeScanned;