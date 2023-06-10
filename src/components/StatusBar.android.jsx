import React from 'react';
import {StatusBar as NativeStatusBar} from 'react-native';
import useColorScheme from '../utils/useColorScheme';
import styleToBarStyle from '../utils/styleToBarStyle';

export default function StatusBar(props) {
  const {
    style,
    animated,
    hidden,
    backgroundColor: backgroundColorProp,
    translucent: translucentProp,
  } = props;

  // Default to true for translucent
  const translucent = translucentProp ?? true;

  const colorScheme = useColorScheme();
  const barStyle = styleToBarStyle(style, colorScheme);

  let backgroundColor = backgroundColorProp;
  if (translucent && !backgroundColor) {
    backgroundColor = 'transparent';
  }

  return (
    <NativeStatusBar
      translucent={translucent}
      barStyle={barStyle}
      backgroundColor={backgroundColor}
      animated={animated}
      hidden={hidden}
    />
  );
}
