import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { IconTypeEnum } from '@utils/CustomEnums.native';

interface IconProps {
  name: string;
  type?: IconTypeEnum;
  color?: string;
  size?: number;
}

const Icon = ({ name, type = IconTypeEnum.MaterialIcons, color = 'white', size = 32 }: IconProps) => {
  switch (type) {
    case IconTypeEnum.MaterialIcons:
      return <MaterialIcon name={name} color={color} size={size} />
    case IconTypeEnum.Ionicons:
      return <Ionicon name={name} color={color} size={size} />
  }
};

export default Icon;