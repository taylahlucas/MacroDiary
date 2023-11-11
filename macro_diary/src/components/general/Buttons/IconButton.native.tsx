import { IconTypeEnum } from '@utils/CustomEnums.native';
import { Pressable, ViewStyle } from 'react-native';
import Icon, { IconProps } from '../Icon/Icon.native';

interface IconButtonProps extends IconProps {
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

const IconButton = ({
  name,
  type = IconTypeEnum.Ionicons,
  color,
  size,
  onPress,
  disabled = false,
  style
}: IconButtonProps) => {
  return (
    <Pressable style={style} onPress={onPress} disabled={disabled}>
      <Icon name={name} type={type} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;