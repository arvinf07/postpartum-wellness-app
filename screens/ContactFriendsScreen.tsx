import { StyleSheet, Text, View, ScrollView, Image} from "react-native";
import { Button, TextInput } from "react-native-paper";

import React, { useState } from "react";



export default function ContactFriendsScreen({}){

  const [contactName, setContactName] = useState("SAMHSA’s National Helpline")
  const [contactNumber, setContactNumber] = useState("1-800-662-4357")


  return(
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Connection for when you need it most.</Text>

          <Text style={styles.describe}>
            Sometimes life can get hard fast. Staying connected with others can help. 
            Add the phone number of a friend, partner, or a family member if you need to connect easily.
            (We'll never share this information. It is for your use only.)
          </Text>

          <Image 
            source={{
              uri: "https://image.freepik.com/free-vector/refer-friend-concept-with-hands-holding-phone-with-list-friends-contacts-friend-concept-international-communication-online-chat_214151-34.jpg",
              width: 200,
              height: 200
            }}
            >
          </Image>
      
          <Text style={styles.describe}>
            Name of Contact
          </Text>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            value={contactName}
            onChangeText={(text) => setContactName(text)}
          />


          <Text style={styles.describe}>
            Phone Number of Contact
          </Text>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            value={contactNumber}
            onChangeText={(text) => setContactNumber(text)}
          />

          <Button
            style={styles.button}
            mode="contained"
            onPress={() =>
              console.log("submit", contactName, contactNumber)
            }
          >
            Add Contact!
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  getStartedContainer: {
    justifyContent: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 24,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  textInput: {
    minWidth: 200,
    height: 64,
    justifyContent: "center",
    marginBottom: 8,
  },
  button: {
    minWidth: 200,
    height: 64,
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 8,
  },
  describe: {
    fontSize: 16,
    color: "rgba(96,100,109, 1)",
    marginBottom: 5,
    marginTop: 5,
  },
});
