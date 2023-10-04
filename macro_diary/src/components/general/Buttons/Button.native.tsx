import { Pressable, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style: any;
}

const Button = ({ title, onPress, style }: ButtonProps) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={{ textAlign: 'center' }}>{title}</Text>
    </Pressable>
  );
};

export default Button;