import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <LinearGradient
        colors={['#f731db', '#4600f1']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <Text style={styles.heading}>Heading</Text>
        <Text style={styles.subheading}>Subheading 1</Text>
        <Text style={styles.subheading}>Subheading 2</Text>
        <Text style={styles.subheading}>Subheading 3</Text>
        <Text style={styles.subheading}>Subheading 4</Text>
        <Text style={styles.subheading}>Subheading 5</Text>
      </LinearGradient>
      {/* <TouchableOpacity style={styles.button}>
      </TouchableOpacity> */}
=======
      <Text>Open up App.js to start working on your app!ft</Text>
      <StatusBar style="auto" />
>>>>>>> master
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  card: {
    width: 300,
    padding: 20,
    borderRadius: 25,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  subheading: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 25,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#4600f1',
  },
});
