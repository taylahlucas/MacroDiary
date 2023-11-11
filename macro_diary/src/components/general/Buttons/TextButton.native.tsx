import { Pressable, Text } from 'react-native';
import { ButtonProps } from './Button.native';

const TextButton = ({ title, onPress, style }: ButtonProps) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={{ textAlign: 'center' }}>{title}</Text>
    </Pressable>
  );
};

export default TextButton;