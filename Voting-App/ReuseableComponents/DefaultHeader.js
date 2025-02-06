import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation();
  return (
    
    <View>
      <View style={styles.head}>
      <TouchableOpacity onPress={() =>{navigation.goBack()}}>
        <Image style={styles.arrow} source={require('../assets/backarrow.png')} />
        </TouchableOpacity>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
       
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  head: {
  
    height: 100,
    width: '100%',
    backgroundColor: "#E8E8E8",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#E0E0E0",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
 
  },
  arrow: {
    height: 30,
    width: 35,
  },
  logo: {
    height: 40,  // Adjusted height
    width: 100,  // Adjusted width
    resizeMode: "contain",  // Ensures the image maintains its aspect ratio
  },
});
