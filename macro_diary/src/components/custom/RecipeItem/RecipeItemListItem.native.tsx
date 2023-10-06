import React, { useState } from 'react';
import { ProductDataType } from "../../../utils/CustomTypes.native";
import Dropdown from "../../general/Dropdown/Dropdown.native";
import SelectableListItem from '../../general/List/SelectableListItem.native';
import RecipeItemDropdown from './RecipeItemDropdown.native';

interface ScannedItemListItemProps {
  title: string;
  color: string;
  ingredients: ProductDataType[];
}

const RecipeItemListItem = ({ title, color, ingredients }: ScannedItemListItemProps) => {
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
      view={<RecipeItemDropdown title={title} ingredients={ingredients} isOpen={openItem} />}
    />
  );
};

export default RecipeItemListItem;