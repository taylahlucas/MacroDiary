import { useState } from 'react';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import { TextInputContainer } from './TextFieldStyledComponents.native';
import fontStyle from '@styles/Font/FontStyle';
import { TextInputProps } from 'react-native';

// interface TextFieldProps {
//   value?: string;
//   onChangeText: (value: string) => void;
//   placeholder?: string;
// }

const TextField = ({ onChangeText, placeholder, value }: TextInputProps) => {
  const theme = useGetTheme();
  const [nameFieldSelected, setNameFieldSelected] = useState(false);

  return (
    <TextInputContainer
      value={value}
      placeholder={placeholder}
      style={{ ...fontStyle.ListItemSubTitle }}
      nameFieldSelected={nameFieldSelected}
      color={theme.lightGrey}
      focusedColor={theme.lightPurple}
      textColor={theme.darkGrey}
      placeholderTextColor={theme.midGrey}
      onFocus={() => setNameFieldSelected(true)}
      onBlur={() => setNameFieldSelected(false)}
      onChangeText={onChangeText}
    />
  );
};

export default TextField;