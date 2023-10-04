import React from 'react';
import { View, TextInput } from 'react-native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { styles } from './CustomSearchBarStyles.native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CustomSearchBarProps {
  placeholder?: string;
  setSearchValue: (value: string) => void;
}

const CustomSearchBar = ({ 
  placeholder = 'Search recent scans...', 
  setSearchValue, 
}: CustomSearchBarProps): JSX.Element => {
  const theme = useGetTheme();

  return (
    <View style={{...styles.searchBarContainer, backgroundColor: theme.surfaceColor}}>
      <Icon style={styles.searchBarIcon} name={'search'} color={theme.textOnBg} size={25} />
      <TextInput
        style={{...styles.textInput, color: theme.textOnBg }}
        placeholder={placeholder}
        onPressIn={(): void => setSearchValue('')}
        onChange={(event): void => setSearchValue(event.nativeEvent.text ?? '')}
      />
    </View>
  );
};

export default CustomSearchBar;