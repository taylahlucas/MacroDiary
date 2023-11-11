import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import Condition from '../Condition.native';

interface DropdownProps {
  header: any;
  children: any;
}

const Dropdown = ({ header, children }: DropdownProps) => {
  // TODO: Move this
  const [isOpen, setOpenItem] = useState(false);
  
  return (
    <View style={{ minWidth: 150 }}>
      <Pressable onPress={(): void => setOpenItem(!isOpen)}>{header}</Pressable>
      <Condition condition={isOpen}>
        {children}
      </Condition>
    </View>
  );
};

export default Dropdown;