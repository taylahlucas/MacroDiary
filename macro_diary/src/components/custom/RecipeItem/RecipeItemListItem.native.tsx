import React, { useState } from 'react';
import { Product } from "@utils/CustomTypes.native";
import Dropdown from '@components/general/Dropdown/Dropdown.native';
import SelectableListItem from '@components/general/List/SelectableListItem.native';
import RecipeItemDropdown from './RecipeItemDropdown.native';

interface ScannedItemListItemProps {
  title: string;
  color: string;
  ingredients: Product[];
}

const RecipeItemListItem = ({ title, color, ingredients }: ScannedItemListItemProps) => {
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
      <RecipeItemDropdown title={title} ingredients={ingredients} />
    </Dropdown>
  );
};

export default RecipeItemListItem;