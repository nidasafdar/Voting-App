import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../ReuseableComponents/Header";
import Footer from "../ReuseableComponents/Footer";

const MainScreen = () => {
  const [selectOption, setSelectedOption] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(0)); // For fade-in animation

  // Create separate animated values for each button
  const [profileScale] = useState(new Animated.Value(1));
  const [voteScale] = useState(new Animated.Value(1));
  const [candidateScale] = useState(new Animated.Value(1));
  const [progressScale] = useState(new Animated.Value(1));

  // Fade-in animation for the poll section
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  // General function for button press animation
  const animateButton = (scaleValue) => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95, // Shrink
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1, // Grow back to normal
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    fadeIn(); // Trigger fade-in animation when the component mounts
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Header />
        <View>
          <Text style={styles.Welcometext}>
            One vote, one voice, one future: Make your mark, express your
            opinions, and help create a better tomorrow!
          </Text>
        </View>

        <TouchableOpacity style={styles.event}>
          <Text style={styles.eventtext}>Upcoming Events!</Text>
        </TouchableOpacity>

        <View style={styles.btns}>
          <View style={styles.buttonColumn}>
            <Animated.View
              style={[
                styles.button,
                { transform: [{ scale: profileScale }] },
              ]}
            >
              <TouchableOpacity
                onPressIn={() => animateButton(profileScale)}
                onPressOut={() => {}}
              >
                <Text style={styles.buttontext}>Check Your Profile</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={[
                styles.button,
                { transform: [{ scale: voteScale }] },
              ]}
            >
              <TouchableOpacity
                onPressIn={() => animateButton(voteScale)}
                onPressOut={() => {}}
              >
                <Text style={styles.buttontext}>Cast Your Vote</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>

          <View style={styles.buttonColumn}>
            <Animated.View
              style={[
                styles.button,
                { transform: [{ scale: candidateScale }] },
              ]}
            >
              <TouchableOpacity
                onPressIn={() => animateButton(candidateScale)}
                onPressOut={() => {}}
              >
                <Text style={styles.buttontext}>Candidate List</Text>
              </TouchableOpacity>
            </Animated.View>

            <Animated.View
              style={[
                styles.button,
                { transform: [{ scale: progressScale }] },
              ]}
            >
              <TouchableOpacity
                onPressIn={() => animateButton(progressScale)}
                onPressOut={() => {}}
              >
                <Text style={styles.buttontext}>Progress Section</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.linkk}>FAQ Section.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkk}>
          <Text style={styles.linkk}>Election Countdown.</Text>
        </TouchableOpacity>

        {/* Poll Section with fade-in animation */}
        <Animated.View style={[styles.pollsection, { opacity: fadeAnim }]}>
          <Text style={styles.polheader}>Today's Poll</Text>
          <Text style={styles.pollQuestion}>Should Voting be mandatory?</Text>
          <View style={styles.bool}>
            {/* Yes Option */}
            <TouchableOpacity
              style={styles.poloption}
              onPress={() => setSelectedOption("Yes")}
            >
              <View style={styles.optionContainer}>
                <View style={styles.radioCircle}>
                  {selectOption === "Yes" && (
                    <View style={styles.selectCircle} />
                  )}
                </View>
                <Text style={styles.poloptiontext}>Yes</Text>
              </View>
            </TouchableOpacity>

            {/* No Option */}
            <TouchableOpacity
              style={styles.poloption}
              onPress={() => setSelectedOption("No")}
            >
              <View style={styles.optionContainer}>
                <View style={styles.radioCircle}>
                  {selectOption === "No" && (
                    <View style={styles.selectCircle} />
                  )}
                </View>
                <Text style={styles.poloptiontext}>No</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>

        <View style={styles.featuredCandidate}>
          <Text style={styles.infoo}>Candidate of the Week</Text>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRuhCypCCKbuGm4vF-mKbcBRIG0dmtOX4tw&s",
            }}
            style={styles.candidateImage}
          />
          <Text style={styles.candidatename}>Shahbaz Shareef</Text>
          <Text style={styles.candidateBio}>
            "Commited to building a better future by focusing on education and
            healthcare reforms."
          </Text>
        </View>
       <Footer/>
      
      </View>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Clean white background
    paddingBottom: 20,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 0,
  },
  Welcometext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121", // Primary text color for high contrast
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 20,
    textShadowColor: "#E0E0E0", // Subtle text shadow for depth
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontFamily: "Open Sans",
    lineHeight: 30,
  },
  event: {
    alignSelf: "center",
    padding: 20,
  },
  eventtext: {
    fontSize: 26,
    fontWeight: "600",
    textDecorationLine: "underline",
    color: "#4A90E2", // Secondary text color for a softer look
  },
  buttonColumn: {
    flexDirection: "column",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#4A90E2", // Primary accent for buttons
    borderRadius: 14,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    height: 70,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  buttontext: {
    fontSize: 20,
    color: "#FFFFFF", // White text on primary accent for clarity
    fontWeight: "bold",
  },
  btns: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  linkk: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A90E2", // Consistent accent color for links
    textDecorationLine: "underline",
    padding: 5,
    margin: 10,
    fontWeight:600,
    alignSelf: "center",
  },
  pollsection: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  polheader: {
    color: "#212121", // Primary text color for headers
    fontSize: 22,
    fontWeight: "600",
    padding: 5,
  },
  pollQuestion: {
    color: "#212121", // Primary text color for questions
    fontSize: 18,
    fontWeight: "400",
    padding: 5,
  },
  poloptiontext: {
    color: "#212121",
    fontSize: 16,
    fontWeight: "400",
    margin: 5,
  },
  bool: {
    alignItems: "center",
    flexDirection: "row", // Options in a row
    marginVertical: 10,
  },
  poloption: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  optionContainer: {
    flexDirection: "row", // Aligns circle and text in a row
    alignItems: "center",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4A90E2", // Accent color for the radio border
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#50E3C2", // Secondary accent for the selected option
  },
  featuredCandidate: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  infoo: {
    fontSize: 18,
    color: "#212121",
    fontWeight: "600",
    padding: 20,
  },
  candidateImage: {
    width: 120,
    height: 120,
    borderColor: "#E0E0E0",
    borderRadius: 60,
  },
  candidatename: {
    fontSize: 20,
    color: "#212121",
    fontWeight: "600",
    padding: 10,
  },
  candidateBio: {
    fontSize: 12,
    paddingHorizontal: 50,
    color: "#757575",
    fontWeight: "600",
    textAlign: "center",
  },
  socialMedia: {
    marginTop: 130,
    marginBottom: 0,
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: "#F9F9F9", // Off-white background for the social section
    justifyContent: "center",
    alignItems: "center",
  },
  socialText: {
    color: "#212121",
    fontSize: 14,
    fontWeight: "600",
    paddingHorizontal: 15,
  },
  socialTextt: {
    color: "#212121",
    fontSize: 14,
    fontWeight: "600",
    paddingHorizontal: 15,
  },
});
