import ScrollableList from '../../general/List/ScrollableList.native';
import useGetSearchMenuList from './hooks/useGetSearchMenuList.native';
import ScannedItemMenuItem from './ScannedItemMenuItem.native';

const ScannedItemMenuList = () => {
  const searchMenuList = useGetSearchMenuList();

  return (
    <ScrollableList
      style={{ maxHeight: 80, marginLeft: -8 }}
      isHorizontal={true}
    >
      {searchMenuList.map((item, index) =>
        <ScannedItemMenuItem 
          key={item.id}
          index={index}
          title={item.title}
        />
      )}
    </ScrollableList>
  );
};

export default ScannedItemMenuList;