import { ScannedMenuListType } from '../../../../utils/CustomTypes.native';
import { SearchMenuListEnum } from '../../../../utils/CustomEnums.native';

const useGetSearchMenuList = (): ScannedMenuListType[] => {
  return [
    {
      id: SearchMenuListEnum.SCANNED_ITEMS,
      title: 'scanned items'
    },
    {
      id: SearchMenuListEnum.RECIPES,
      title: 'recipes'
    },
    {
      id: SearchMenuListEnum.CUSTOM_RECIPES,
      title: 'custom recipes'
    },
  ]
};

export default useGetSearchMenuList;