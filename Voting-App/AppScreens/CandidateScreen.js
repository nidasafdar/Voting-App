import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import Footer from '../ReuseableComponents/Footer';
import Header from '../ReuseableComponents/Header';


const candidates = [
  {
    name: "Nawaz Sharif",
    age: 75, // born December 25, 1949
    party: "Pakistan Muslim League (N)",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmWLqXtVqxJGCu5xxTcLZsdRhfPN1LjuUl0UkdBgPNDuM4o6IphHkju6126QZ7KlVwDU&usqp=CAU"
  },
  {
    name: "Imran Khan",
    age: 72, // born October 5, 1952
    party: "Pakistan Tehreek-e-Insaf",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydWui75GZ7s1B3u8FAR5TcVbdgQUC9sUM0dMQnAc8ONbAcehvAMA_HqYZH7RF2C9-CR4&usqp=CAU"
  },
  {
    name: "Asif Ali Zardari",
    age: 69, // born July 20, 1955 (approx.)
    party: "Pakistan Peoples Party",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZoeiQd4mDVr-hfemwRngOm8UMArkzi_5Fw&s"
  },
  {
    name: "Maryam Nawaz Sharif",
    age: 51, // born October 28, 1973
    party: "Pakistan Muslim League (N)",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFt_-IV9mTUgfUFjmHRaR3Z5C_EpUaFJH1tQ&s"
  },
  {
    name: "Shehbaz Sharif",
    age: 73, // born September 23, 1951
    party: "Pakistan Muslim League (N)",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Shehbaz_Sharif_%2834929982354%29.jpg"
  },
  {
    name: "Bilawal Bhutto Zardari",
    age: 36, // born September 21, 1988
    party: "Pakistan Peoples Party",
    profilePic: "https://cdn.britannica.com/54/246054-050-079F5008/Pakistan-foreign-minister-Bilawal-Bhutto-Zardari.jpg"
  },
  {
    name: "Mahmood Khan Achakzai",
    age: 77, // born March 10, 1948 (approx.)
    party: "Pashtunkhwa Milli Awami Party",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4JzgBMV81Kpx86_SdSssUwPrRYxSBGTkIag&s"
  },
  {
    name: "Gohar Ali Khan",
    age: 45, // approximate age; adjust as needed
    party: "Pakistan Tehreek-e-Insaf",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_UQaxoQ-o4DkgZX-04BvMtsy6KKiaEiP4w&s"
  },
  {
    name: "Omar Ayub Khan",
    age: 55, // approximate (son of Ayub Khan)
    party: "Independent (PTI-backed)",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfrXDa3OEq5kNqstUg57XDL3_IBGjdYJnqXg&s"
  },
  {
    name: "Shah Mahmood Qureshi",
    age: 69, // approximate; born in the mid-1950s
    party: "Pakistan Tehreek-e-Insaf",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ty_N8wL3ZNQUBr88jLKSRBxZMEcvwe05jQ&s"
  },
  {
    name: "Yasmin Rashid",
    age: 50, // approximate; adjust as needed
    party: "Pakistan Tehreek-e-Insaf",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBE_mZmtJWIvQ78-7lR_ImuAd2ivXqKzq1Rg&s"
  },
  {
    name: "Khawaja Asif",
    age: 76, // born January 27, 1949 (approx.)
    party: "Pakistan Muslim League (N)",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrG8zBSOk_T-qocZTnTjiQgwTwMKgt3SsUPQ&s"
  },
  {
    name: "Rehana Dar",
    age: 55, // approximate; adjust as needed
    party: "Independent (PTI-backed)",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCzqM21f3EQUK4len0K3qZ3q5nGzi-gVEukawsaV46A6XI9driPPuXkm7zL3Y6E-Bug8U&usqp=CAU"
  },
  {
    name: "Tariq Fazal Chaudhry",
    age: 60, // approximate; adjust as needed
    party: "Pakistan Muslim League (N)",
    profilePic: "https://i.dawn.com/large/2016/02/56b2d70277065.jpg"
  },
  {
    name: "Shoaib Shaheen",
    age: 50, // approximate; adjust as needed
    party: "Pakistan Tehreek-e-Insaf",
    profilePic: "https://search.just.pk/include/classes/photos/f42836f074d98d33fc5c5988b566c55f1649571675.png"
  }
];


const CandidateScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity>
      <Image source={{ uri: item.profilePic }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>Age: {item.age}</Text>
      <Text style={styles.details}>Party: {item.party}</Text>
      </TouchableOpacity>
    </View>
  );

  const ListHeader = () => (
    <View>
      <Text style={styles.title}>Candidates Standing for Elections</Text>
    </View>
  );

  const ListFooter = () => (
    <Footer />
  );

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={candidates}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
  
    alignSelf:'center',

    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    paddingHorizontal: 16,
    marginTop:10,
    marginBottom:30,
    color: '#4A90E2',
  },
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 8,
    elevation: 2,
    marginHorizontal: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  details: {
    fontSize: 14,
    color: '#4A90E2',
  },
});

export default CandidateScreen;
