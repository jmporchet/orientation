import React, { useState } from 'react';
import { ScreenOrientation } from 'expo';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [orientationText, setOrientationText] = useState('PORTRAIT_UP');
  async function changeScreenOrientation(orientation) {
    setOrientationText(orientation)
    let orient
    switch (orientation) {
      case 'PORTRAIT_UP':
        orient = ScreenOrientation.OrientationLock.PORTRAIT_UP;
        break;
      case 'LANDSCAPE_RIGHT':
        orient = ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT;
        break;
      case 'LANDSCAPE_LEFT':
        orient = ScreenOrientation.OrientationLock.LANDSCAPE_LEFT;
        break;
      case 'PORTRAIT_DOWN':
        orient = ScreenOrientation.OrientationLock.PORTRAIT_DOWN;
        break;
      default:
        orient = ScreenOrientation.OrientationLock.PORTRAIT_UP;
    }
    await ScreenOrientation.lockAsync(orient);

  }
  return (
    <View style={styles.container}>
      <Text>Orientation is {orientationText}</Text>
      <Button onPress={() => changeScreenOrientation('PORTRAIT_UP')} title="Change Orientation Portrait Up" />
      <Button onPress={() => changeScreenOrientation('LANDSCAPE_RIGHT')} title="Change Orientation Landscape Right" />
      <Button onPress={() => changeScreenOrientation('LANDSCAPE_LEFT')} title="Change Orientation Landscape Left" />
      <Button onPress={() => changeScreenOrientation('PORTRAIT_DOWN')} title="Change Orientation Portrait Down" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
