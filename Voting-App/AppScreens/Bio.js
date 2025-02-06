import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const Bio = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headtxt}>Voting Demo App</Text>
      <Image source={require('../assets/logo.png')} style={styles.logoImage} />
      <Text style={styles.headtxt}>Developed By</Text>
      <Text style={styles.name}>Nida Safdar</Text>
      <Text style={styles.info}>Age: 21</Text>
      <Text style={styles.info}>Location: Chiniot, Pakistan</Text>
      <Text style={styles.bio}>
        React Native application developer with a strong background in app and web development. Passionate about creating user-friendly and efficient digital solutions.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact Me</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A90E2',
  },
  info: {
    fontSize: 16,
    color: '#4A90E2',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: '#4A90E2',
    textAlign: 'center',
    marginBottom: 20,
  },
  headtxt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A90E2',
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Bio;
