import React from 'react';
import { ProductDataType } from "@utils/CustomTypes.native";
import Dropdown from '@components/general/Dropdown/Dropdown.native';
import SelectableListItem from '@components/general/List/SelectableListItem.native';
import RecipeItemDropdown from './RecipeItemDropdown.native';

interface ScannedItemListItemProps {
  title: string;
  color: string;
  ingredients: ProductDataType[];
}

const RecipeItemListItem = ({ title, color, ingredients }: ScannedItemListItemProps) => {
  
  return (
    <Dropdown 
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