import { useState } from 'react';
import useGetTheme from '@styles/hooks/useGetTheme.native';
import { TextInputContainer } from './TextFieldStyledComponents.native';

interface TextFieldProps {
  placeholder?: string;
}

const TextField = ({ placeholder }: TextFieldProps) => {
  const theme = useGetTheme();
  const [nameFieldSelected, setNameFieldSelected] = useState(false);

  return (
    <TextInputContainer 
      placeholder={placeholder}
      nameFieldSelected={nameFieldSelected}
      color={theme.darkGrey}
      focusedColor={theme.lightPurple}
      textColor={theme.lightGrey}
      placeholderTextColor={theme.midGrey}
      onFocus={() => setNameFieldSelected(true)}
      onBlur={() => setNameFieldSelected(false)}
    />
  );
};

export default TextField;