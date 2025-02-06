import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.socialMedia}>
      <Text style={styles.socialText}>Follow Us on.</Text>
      <TouchableOpacity>
        <Text style={styles.socialTextt}>Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.socialTextt}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.socialTextt}>Twitter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  socialMedia: {
    marginTop: 30,
    paddingTop:15,
    paddingVertical: 10,
    alignItems: "center",
  backgroundColor:'#E8E8E8',
    display:'flex',
    flexDirection:'row',
    marginBottom:0,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",

  },
  socialText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    paddingRight:10,
    paddingLeft:40,
    paddingTop:2,
    
  },
  socialTextt: {
    fontSize: 14,
    paddingLeft:15,
    color: "#007BFF",
    marginVertical: 3,
    paddingRight:15,
    fontWeight:600,
  },
});
