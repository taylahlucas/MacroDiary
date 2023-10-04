import { View } from 'react-native';

interface DropdownProps {
  header: any;
  view: any;
}

const Dropdown = ({ header, view }: DropdownProps) => {
  return (
    <View style={{ minWidth: 150 }}>
      {header}
      {view}
    </View>
  );
};

export default Dropdown;