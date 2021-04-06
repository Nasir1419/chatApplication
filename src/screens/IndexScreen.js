import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

const IndexScreen = () => {
  const [message, setMessage] = useState("");
  return (
    <View style={styles.mainBorder}>
      <View style={styles.bottomView}>
        <View style={styles.action}>
          <TextInput
            placeholder="Type Here to Send"
            style={styles.textInput}
            onChangeText={(newMessage) => {
              setMessage(newMessage);
            }}
          />
          <TouchableOpacity>
            <Text style={styles.sendButton}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBorder: {
    borderWidth: 2,
    height: 700,
    width: "99%",
    alignSelf: "center",
  },
  textInput: { borderWidth: 1, fontSize: 25, width: "70%", marginLeft: 4 },
  sendButton: {
    borderWidth: 1,
    fontSize: 25,
    width: "100%",
    marginLeft: 20,
    padding: 2,
  },
  action: { flexDirection: "row" },
  bottomView: {
    width: "100%",
    height: 50,
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
  },
});

export default IndexScreen;
