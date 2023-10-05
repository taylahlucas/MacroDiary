import React from 'react';
import { View, TextInput } from 'react-native';
import useGetTheme from '../../../styles/hooks/useGetTheme.native';
import { styles } from './CustomSearchBarStyles.native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useMainDispatch from '../../../redux/hooks/useMainDispatch.native';

interface CustomSearchBarProps {
  placeholder?: string;
}

const CustomSearchBar = ({ placeholder = 'Search recent scans...' }: CustomSearchBarProps): JSX.Element => {
  const theme = useGetTheme();
  const { setSearchValue } = useMainDispatch();

  return (
    <View style={{...styles.searchBarContainer, backgroundColor: theme.darkGrey}}>
      <Icon style={styles.searchBarIcon} name={'search'} color={theme.midGrey} size={25} />
      <TextInput
        style={{...styles.textInput, color: theme.lightGrey }}
        placeholder={placeholder}
        placeholderTextColor={theme.midGrey}
        onPressIn={(): void => setSearchValue('')}
        onChange={(event): void => setSearchValue(event.nativeEvent.text ?? '')}
      />
    </View>
  );
};

export default CustomSearchBar;