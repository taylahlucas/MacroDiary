import AddRecipeModal from "@screens/AddRecipeModal.native";
import Diary from "@screens/Diary.native";
import Search from "@screens/Search.native";
import { IconTypeEnum, TabEnum } from "@utils/CustomEnums.native";
import { TabItemType } from '@utils/CustomTypes.native';

const useGetTabList = (): TabItemType[] => {
  return [
    {
      id: TabEnum.SEARCH,
      icon: 'search',
      iconType: IconTypeEnum.MaterialIcons,
      title: 'search',
      screen: Search
    },
    {
      id: TabEnum.DIARY,
      icon: 'format-list-bulleted',
      iconType: IconTypeEnum.MaterialIcons,
      title: 'diary',
      screen: Diary
    },
    {
      id: TabEnum.ADD_RECIPE,
      icon: 'add-circle',
      iconType: IconTypeEnum.MaterialIcons,
      title: 'add',
      screen: AddRecipeModal
    },
    {
      id: TabEnum.CHARTS,
      icon: 'pie-chart',
      iconType: IconTypeEnum.Ionicons,
      title: 'charts',
      screen: Diary
    },
    {
      id: TabEnum.SETTINGS,
      icon: 'settings-outline',
      iconType: IconTypeEnum.Ionicons,
      title: 'settings',
      screen: Diary
    }
  ]
};

export default useGetTabList;