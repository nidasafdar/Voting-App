// Header.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation(); // Uses the navigation from the root NavigationContainer
  const [modalVisible, setModalVisible] = useState(false);

  const openProfileModal = () => setModalVisible(true);
  const closeProfileModal = () => setModalVisible(false);

  const handleSignin = () => {
    closeProfileModal();
    navigation.navigate('SigninScreen');  // Navigate using the parent's navigation
  };

  const handleLogin = () => {
    closeProfileModal();
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.header}>
      {/* Logo Section */}
      <View style={styles.logo}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logoImage}
        />
      </View>

      {/* Election Name Section */}
      <View style={styles.middle}>
        <TouchableOpacity style={styles.electionName}>
          <Text style={styles.electionText}>General Elections</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <TouchableOpacity style={styles.profile} onPress={openProfileModal}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
      </TouchableOpacity>

      {/* Modal Section */}
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeProfileModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={handleSignin} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogin} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Log In</Text>
              </TouchableOpacity>
              <Button title="Close" onPress={closeProfileModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Header;



const styles = StyleSheet.create({
  header: {
 
    width: "100%",
    height: 100,
    backgroundColor: "#E8E8E8", // White background for a light theme
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#E0E0E0", // Light gray divider
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  middle: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  electionName: {
    alignSelf: "center",
  },
  electionText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A90E2", // Primary text color for headings
  },
  profile: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "cover",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#FFFFFF", // Use white to keep the modal light
    borderRadius: 10,
    alignItems: "center",
  },
  modalButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#4A90E2", // Primary accent blue for buttons
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
  },
  modalButtonText: {
    color: "#FFFFFF", // White text for contrast
    fontSize: 16,
    fontWeight: "bold",
  },
});


