import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) : 0

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <Text style={styles.text}>Enter your age</Text>
      <TextInput
      placeholder="Age"
      value={age}
      onChangeText={setAge}
      keyboardType="numeric"
      style={styles.input}
      ></TextInput>
      <Text style={styles.text}>Lower limit: {ageAsNumber > 0 ? Math.floor((220-ageAsNumber) * 0.65) : ''} bpm</Text>
      <Text style={styles.text}>Upper limit: {ageAsNumber > 0 ? Math.floor((220-ageAsNumber) * 0.85) : ''} bpm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
