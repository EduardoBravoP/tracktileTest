import {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';

export interface CustomButtonProps extends TouchableOpacityProps {
  children: ReactNode;
}
