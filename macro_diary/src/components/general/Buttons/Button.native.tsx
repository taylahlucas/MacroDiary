import CustomButton from './CustomButton.native';
import ExitButton from './ExitButton.native';

type ButtonType = 'Custom' | 'Exit' | 'Icon';

export interface ButtonProps {
  type?: ButtonType,
  title?: string;
  onPress: () => void;
  style?: any;
}

const Button = ({ type = 'Custom', title, onPress, style }: ButtonProps) => {
  switch (type) {
    case 'Custom':
      return <CustomButton title={title} onPress={onPress} style={style} />
    case 'Exit':
      return <ExitButton title={title} onPress={onPress} style={style} />
    default:
      return <CustomButton title={title} onPress={onPress} style={style} />
  }
};

export default Button;