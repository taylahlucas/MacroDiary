import { useState } from 'react';
import { MacroType } from "../../../utils/CustomTypes.native";
import Dropdown from "../../general/Dropdown/Dropdown.native";
import SelectableListItem from '../../general/List/SelectableListItem.native';
import ScannedItem from './ScannedItem.native';

interface ScannedItemListItemProps {
  title: string;
  color: string;
  macros: MacroType;
}

const ScannedItemListItem = ({ title, color, macros }: ScannedItemListItemProps) => {
  const [openItem, setOpenItem] = useState(false);

  return (
    <Dropdown 
      header={
        <SelectableListItem 
          title={title} 
          onClick={(): void => setOpenItem(!openItem)}
          style={{ backgroundColor: color, minWidth: 350 }}
        />
      }
      view={<ScannedItem macros={macros} isOpen={openItem} />}
    />
  );
};

export default ScannedItemListItem;