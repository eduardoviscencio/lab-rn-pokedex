import React, {PropsWithChildren} from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './styles';

type FloatingActionButtonProps = PropsWithChildren<{
  action: () => void;
}>;

const FloatingActionButton = ({
  children,
  action,
}: FloatingActionButtonProps) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.container}>{children}</View>
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
