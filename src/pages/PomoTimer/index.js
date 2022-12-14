import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Platform} from 'react-native';

import PomodoroTimer from './components/PomoTimer';

export default class App extends React.Component {
  render() {
    return (
      // <ScrollView style={styles.container}>
        <ImageBackground source={require('../../../assets/background_pomodoro_screen.png')} resizeMode={Platform.OS == "android" ? "stretch" : "stretch" } style={styles.container}>
        <ScrollView>

          <PomodoroTimer />
        </ScrollView>
        </ImageBackground>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
});