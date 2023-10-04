import { useState } from 'react';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { MacroType } from "../../../utils/CustomTypes.native";
import Dropdown from "../../general/Dropdown/Dropdown.native";
import SelectableListItem from '../../general/List/SelectableListItem.native';
import ScannedItem from './ScannedItem.native';

interface ScannedItemListItemProps {
  title: string;
  macros: MacroType;
}

const ScannedItemListItem = ({ title, macros }: ScannedItemListItemProps) => {
  const theme = useGetTheme();
  const [openItem, setOpenItem] = useState(false);

  return (
    <Dropdown 
      header={<SelectableListItem 
        title={title} 
        onClick={(): void => setOpenItem(!openItem)}
        style={{ backgroundColor: theme.secondarySurfaceColor, minWidth: 350 }}
      />}
      view={<ScannedItem macros={macros} isOpen={openItem} />}
    />
  );
};

export default ScannedItemListItem;