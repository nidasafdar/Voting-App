import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, Modal } from "react-native";
import React, { useState } from "react";
import DefaultHeader from "../ReuseableComponents/DefaultHeader";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import Footer from "../ReuseableComponents/Footer";

const UserProfile = () => {
  const [modalVoteVisible, setModalVoteVisible] = useState(false);
  const [modalCommentVisible , setModalCommentVisible] = useState(false);
  const [modalLikeVisible , setModalLikeVisible] = useState(false);
const [modalSettinVisible , setModalSettingVisible] = useState(false);
  const openModal = () => {
    setModalVoteVisible(true);
  };

  const closeModal = () => {
    setModalVoteVisible(false);
  };
  
  const opencommentModal = () =>{
    setModalCommentVisible(true);
  };
  const closecommentModal = () =>{
    setModalCommentVisible(false);
  }
  
  const OpenLikeModal = () => {
    setModalLikeVisible(true);

  }
  const closeLikeModal = () =>{
    setModalLikeVisible(false);
  }

  const openSettingModal = () =>{
    setModalSettingVisible(true);
  }
  const closeSettingModal = ()=>{
    setModalSettingVisible(false);

 }
   return (
    <View style={styles.container}>
      <DefaultHeader />
      <ScrollView>
        <View style={styles.bgc}>
          {/* Profile Image Container */}
          <View style={styles.profileContainer}>
            <Image source={require("../assets/blueprofileimg.png")} style={styles.profileImage} />
            <TouchableOpacity style={styles.profileCamera}>
              <Image source={require("../assets/camraicon.png")} style={styles.icon} />
            </TouchableOpacity>
          </View>

          {/* Header Camera Icon */}
          <TouchableOpacity style={styles.headerCamera}>
            <Image source={require("../assets/camraicon.png")} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View style={styles.userdata}>
          <View style={styles.profileOptionsContainer}>
            <TouchableOpacity style={styles.optionButton} onPress={openModal}>
              <MaterialIcons style={styles.iconn} name="how-to-vote" size={30} color="white" />
              <Text style={styles.optionText}>My Votes</Text>
            </TouchableOpacity>

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVoteVisible}
              onRequestClose={closeModal}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.vhtxt}>Your Vote Record</Text>
                  <Text style={styles.vtxt}>
                    You have not voted yet. Choose one candidate to vote for.
                  </Text>
                  <Text style={styles.vtxt}>Best of luck for casting your vote!</Text>
                  <TouchableOpacity onPress={closeModal} style={styles.closebtn}>
                    <Text style={styles.closebtntxt}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <TouchableOpacity style={styles.optionButton} onPress={opencommentModal}>
              <FontAwesome style={styles.iconn} name="comment" size={27} color="white" />
              <Text style={styles.optionText}>My Comments</Text>
            </TouchableOpacity>
            <Modal
            animationType="slide"
            transparent = {true}
            visible = {modalCommentVisible}
            onRequestClose={closecommentModal}
            >
              <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.vhtxt}>Posted Comments</Text>
                <Text style={styles.vtxt}>Comments...</Text>
                <TouchableOpacity onPress={closecommentModal} style={styles.closebtn}>
                    <Text style={styles.closebtntxt}>Close</Text>
                  </TouchableOpacity>
                
                </View></View>


            </Modal>

            <TouchableOpacity style={styles.optionButton} onPress={OpenLikeModal}>
              <FontAwesome style={styles.iconn} name="heart" size={27} color="white" />
              <Text style={styles.optionText}>My Likes</Text>
            </TouchableOpacity>
             <Modal
             animationType="slide"
             transparent = {true}
             visible = {modalLikeVisible}
             onRequestClose={closeLikeModal}
             >
              <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.vhtxt}>Likes</Text>
                <Text style={styles.vtxt}>My Like posts...</Text>
                <Text style={styles.vtxt}>Like Candidate...</Text>
                <TouchableOpacity onPress={closeLikeModal} style={styles.closebtn}>
                    <Text style={styles.closebtntxt}>Close</Text>
                  </TouchableOpacity>

                </View></View>
               
             </Modal>
            <TouchableOpacity style={styles.optionButton} onPress={openSettingModal}>
              <Ionicons style={styles.iconn} name="settings-outline" size={27} color="white" />
              <Text style={styles.optionText} >Settings</Text>
            </TouchableOpacity>
            <Modal 
            animationType="slide"
            transparent = {true}
            visible = {modalSettinVisible }
            onRequestClose={closeSettingModal}
            > 
            <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.vhtxt}>Settings</Text>
              <TouchableOpacity style={styles.vtxt}>Profile Settings...</TouchableOpacity>
              <TouchableOpacity style={styles.vtxt}>App Setting...</TouchableOpacity>
              <TouchableOpacity onPress={closeSettingModal} style={styles.closebtn}>
                    <Text style={styles.closebtntxt}>Close</Text>
                  </TouchableOpacity>
              </View>
              </View>
            </Modal>
          </View>
        </View>

        <View style={styles.attractiveSection}>
          <Text style={styles.welcomeText}>🌟 Welcome Back!</Text>
          <Text style={styles.motivationalText}>
            "Your profile is your digital identity. Make it shine! 🚀"
          </Text>
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgc: {
    backgroundColor: "#A3A3A3",
    height: 165,
    width: "100%",
    position: "relative",
    alignItems: "center",
    borderBottomColor: "black",
  },
  profileContainer: {
    position: "absolute",
    bottom: -80,
    left: 10,
    backgroundColor: "#BABABA",
    borderRadius: 85,
  },
  profileImage: {
    height: 170,
    width: 170,
    borderRadius: 85,
    borderColor: "white",
    borderWidth: 6,
  },
  profileCamera: {
    position: "absolute",
    bottom: 5,
    right: 5,
    height: 40,
    width: 40,
    borderRadius: 60,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
  },
  headerCamera: {
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 40,
    width: 40,
    borderRadius: 60,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 3,
  },
  icon: {
    height: 38,
    width: 38,
    resizeMode: "contain",
  },
  userdata: {
    marginTop: 100,
  },
  profileOptionsContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  optionButton: {
    height: 50,
    width: "40%",
    backgroundColor: "#4A90E2",
    alignSelf: "center",
    flexDirection: "row",
    margin: 5,
    borderRadius: 10,
    padding: 5,
    borderBottomColor: "#BABABA",
  },
  optionText: {
    fontWeight: "600",
    fontSize: 18,
    alignSelf: "center",
    color: "white",
  },
  iconn: {
    alignSelf: "center",
    padding: 6,
  },
  attractiveSection: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "90%",
  },
  welcomeText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "white",
  },
  motivationalText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#4A90E2", // Or any color you prefer
    borderRadius: 10,
    alignItems: "center",
  },
  vhtxt: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
    padding: 10,
    alignSelf: "center",
  },
  vtxt: {
    fontSize: 14,
    fontWeight: "600",
    padding: 5,
    alignSelf: "center",
    color: "white",
    paddingLeft:40,
    paddingRight:40,
  },
  closebtn: {
    height: 30,
    width: "37%",
    alignSelf: "center",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    borderRadius:10,
    backgroundColor:'white'

  },
  closebtntxt: {
    fontSize: 14,
    fontWeight: "800",
    alignSelf: "center",
    padding: 3,
    color: "#4A90E2",
  },
});
