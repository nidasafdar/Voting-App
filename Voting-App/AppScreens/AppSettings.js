import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import Header from "../ReuseableComponents/Header";
import Footer from "../ReuseableComponents/Footer";

const AppSettings = () => {
  const settingsOptions = [
    { id: "1", title: "Profile Settings", onPress: () => {} },
    { id: "2", title: "Notification Settings", onPress: () => {} },
    { id: "3", title: "Security Settings", onPress: () => {} },
    { id: "4", title: "Language and Region", onPress: () => {} },
    { id: "5", title: "Accessibility", onPress: () => {} },
    { id: "6", title: "Help and Support", onPress: () => {} },
    { id: "7", title: "Logout", onPress: () => {} },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.optionContainer} onPress={item.onPress}>
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const ListHeader = () => (
    <View>
      <Text style={styles.title}>App Settings and Privacy</Text>
    </View>
  );

  const ListFooter = () => <Footer />;

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={settingsOptions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} // Ensure each item has a unique 'id'
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 30,
    color: "#4A90E2",
  },
  optionContainer: {
    alignSelf: "center",
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  optionText: {
    fontSize: 16,
    color: "#4A90E2",
  },
  separator: {
    height: 10,
  },
});

export default AppSettings;
