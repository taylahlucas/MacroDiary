import React, { useState } from 'react';
import { Macro } from '@utils/CustomTypes.native';
import Dropdown from '@components/general/Dropdown/Dropdown.native';
import SelectableListItem from '@components/general/List/SelectableListItem.native';
import ScannedItem from './ScannedItem.native';

interface ScannedItemListItemProps {
  title: string;
  color: string;
  macros: Macro;
}

const ScannedItemListItem = ({ title, color, macros }: ScannedItemListItemProps) => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <Dropdown 
    isOpen={isOpen}
    setOpen={setOpen}
      header={
        <SelectableListItem 
          title={title} 
          style={{ backgroundColor: color, minWidth: 350 }}
        />
      }
    >
        <ScannedItem macros={macros} />
    </Dropdown>
  );
};

export default ScannedItemListItem;