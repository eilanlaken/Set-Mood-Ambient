import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import Navigation from './components/Navigation';
import AmbientList from './components/AmbientList';
import CreateAmbientItem from './components/CreateAmbientItem';
import { Audio } from 'expo-av';

const setAudioMode = async () => {
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    interruptionModeIOS: InterruptionModeIOS.DuckOthers,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
    playThroughEarpieceAndroid: false
  });
}

export default function App() {
  const [display, setDisplay] = useState('create');
  const [weatherSound, setWeatherSound] = useState();
  const [beep, setBeep] = useState();
  setAudioMode();
  

  const playSound = async () => {
    const { sound: rain } = await Audio.Sound.createAsync(require('./assets/sounds/light-rain.mp3'));
    setWeatherSound(rain);
    await rain.playAsync();
  }


  setInterval(() => console.log('hi'), 1000);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        {display == 'play' && <AmbientList />}
        {display == 'create' && <CreateAmbientItem />}
        <Button title="Play Sound" onPress={playSound} />
      <Navigation setDisplay={setDisplay}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#faff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
