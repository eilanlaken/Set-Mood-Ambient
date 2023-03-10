import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import Navigation from './components/Navigation';
import AmbientList from './components/AmbientList';
import CreateAmbientItem from './components/CreateAmbientItem';
import * as NavigationBar from 'expo-navigation-bar';

import { Audio } from 'expo-av';

const setAudioMode = async () => {
  await Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    shouldDuckAndroid: true,
    interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
    playThroughEarpieceAndroid: false
  });
};

const setNavigationBarColor = async () => {
  await NavigationBar.setBackgroundColorAsync('#111');
}

const items = [
  {name: 'hh', soundBundle: {}},
  {name: 'bye', soundBundle: {}},
  {name: 'h', soundBundle: {}},
  {name: 'a', soundBundle: {}},
  {name: 'b', soundBundle: {}},

  {name: '1', soundBundle: {}},
  {name: '2', soundBundle: {}},
  {name: '3', soundBundle: {}},
  {name: '4', soundBundle: {}},
  {name: '5', soundBundle: {}},

  {name: '6', soundBundle: {}},
  {name: '7', soundBundle: {}},
  {name: '8', soundBundle: {}},
  {name: '9', soundBundle: {}},
  {name: 'oo', soundBundle: {}},

  {name: 'f', soundBundle: {}},
  {name: 'g', soundBundle: {}},
  {name: 'hh', soundBundle: {}},
  {name: 'jj', soundBundle: {}},
  {name: 'ii', soundBundle: {}},
];

export default function App() {
  const [display, setDisplay] = useState('create');
  const [weatherSound, setWeatherSound] = useState();
  const [beep, setBeep] = useState();
  const [soundBundles, setSoundBundles] = useState(null);
  
  useEffect(() => {
    /* load sounds code */
    console.log('Loading Sound');

    /* return a cleanup function */
    return soundBundles ? () => {
      console.log('Unloading Sound');
      
    } : undefined;
  }, [soundBundles]);

  setAudioMode();
  setNavigationBarColor();

  const playSound1 = async () => {
    const { sound: rain } = await Audio.Sound.createAsync(require('./assets/sounds/light-rain.mp3'));
    setWeatherSound(rain);
    await rain.playAsync();
  }

  const playSound2 = async () => {
    const { sound: beep } = await Audio.Sound.createAsync(require('./assets/sounds/beep.mp3'));
    setBeep(beep);
    await beep.playAsync();
  }


  setInterval(() => console.log('hi'), 1000);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#111' style='light' />
        {display == 'play' && <AmbientList items={items}/>}
        {display == 'create' && <CreateAmbientItem />}
        

        {/* Debugging */}
        {/* <Button title="Play Sound" onPress={playSound1} />
        <Button title="Play Sound" onPress={playSound2} /> */}

      <Navigation display={display} setDisplay={setDisplay}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
