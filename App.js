import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from './components/Navigation';
import AmbientList from './components/AmbientList';
import CreateAmbientItem from './components/CreateAmbientItem';

export default function App() {
  const [display, setDisplay] = useState('create');

  setInterval(() => console.log('hi'), 1000);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        {display == 'play' && <AmbientList />}
        {display == 'create' && <CreateAmbientItem />}
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
