import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DefaultHeader from '../ReuseableComponents/DefaultHeader'
import Footer from '../ReuseableComponents/Footer';

const SigninScreen = () => {
  // State for input fields
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <DefaultHeader/>
      <Text style={styles.headtext}>Get SignIn</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name:"
        placeholderTextColor="#757575"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Age:"
        placeholderTextColor="#757575"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        placeholderTextColor="#757575"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Mobile Number"
        placeholderTextColor="#757575"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Address"
        placeholderTextColor="#757575"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Cnic"
        placeholderTextColor="#757575"
        value={cnic}
        onChangeText={setCnic}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#757575"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.btn} onPress={handleSignup}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
      <Footer/>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", 
  
    
  },
  headtext: {
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: "600",
    color: "#212121",    
    padding: 10,
    marginBottom: 20,
  },
  input: {
    alignSelf:'center',
    borderColor: "#E0E0E0", // Light gray border
    borderWidth: 1,
    height: 50,
    width: "80%",
    backgroundColor: "#F9F9F9", // Subtle off-white for inputs
    color: "#212121",          // Primary text color for readability
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
    borderRadius: 5,           // Rounded corners
  },
  btn: {
    alignSelf:'center',
    height: 50,
    width: "50%",
    borderRadius: 5,
    backgroundColor: "#4A90E2", // Primary accent blue
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});
