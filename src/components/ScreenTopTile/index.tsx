import React, {PropsWithChildren} from 'react';
import {View, TouchableOpacity} from 'react-native';

import styles from './styles';

type ScreenTopTileProps = PropsWithChildren<{
  action: () => void;
}>;

const ScreenTopTile = ({children, action}: ScreenTopTileProps) => {
  return (
    <TouchableOpacity onPress={action}>
      <View style={styles.container}>{children}</View>
    </TouchableOpacity>
  );
};

export default ScreenTopTile;
