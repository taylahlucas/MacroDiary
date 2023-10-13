import { Pressable } from 'react-native';
import useGetTheme from "../../../styles/hooks/useGetTheme.native";
import StyledText from '../Text/StyledText.native';
import { ButtonProps } from './Button.native';

const ExitButton = ({ onPress }: ButtonProps) => {
  const theme = useGetTheme();
  
  return (
    <Pressable
      style={{ 
        width: 30, 
        height: 30, 
        position: 'absolute',
        zIndex: 5,
        right: 16,
        top: 10,
        borderRadius: 15,
        backgroundColor: theme.midGrey,
        justifyContent: 'center',
      }} 
      onPress={onPress}
     >
      <StyledText color={theme.darkGrey}>x</StyledText>
     </Pressable>
  );
};

export default ExitButton;