import { useEffect } from 'react';
import useMainDispatch from '../../../../redux/hooks/useMainDispatch.native';
import useMainState from '../../../../redux/hooks/useMainState.native';


const useSetFilteredProductData = () => {
  const { setFilteredProductData } = useMainDispatch();
  const { searchValue, filteredProductData } = useMainState();

  useEffect(() => {
    if (searchValue.length > 2) {
      setFilteredProductData(filteredProductData.filter((item) => item.title.includes(searchValue)));
    }
    else {
      setFilteredProductData(filteredProductData);
    }
  }, [searchValue, filteredProductData])  
};

export default useSetFilteredProductData;