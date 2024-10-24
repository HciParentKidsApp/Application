import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";
import { Link, useRouter } from "expo-router";
import React from "react";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const KidsDetails = () => {
  const router = useRouter();
  const handleNextPress = () => {
    router.navigate("/personality");
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginText}>Kid's Details</Text>
      </View>
      <View style={styles.loginMethodHolder}>
        <Text style={{ alignSelf: "flex-start", color: "white" }}>
          Date of Birth
        </Text>
        <View style={styles.dobHolder}>
          <TextInput
            style={styles.userPhNumber}
            placeholder=" DD"
            keyboardType="numeric"
          ></TextInput>
          <TextInput
            style={styles.userPhNumber}
            placeholder=" MM"
            keyboardType="numeric"
          ></TextInput>
          <TextInput
            style={styles.userPhNumber}
            placeholder=" YYYY"
            keyboardType="numeric"
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginWithPassword}
        onPress={handleNextPress}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default KidsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "#793AF0",
    borderWidth: 1,
    alignItems: "center",
  },

  loginHeader: {
    borderWidth: 1,
    //left: width / 3,
    top: height / 6,
    backgroundColor: "#F5C53F",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.5,
    borderRadius: 10,
    padding: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },

  loginMethodHolder: {
    top: height / 4,
    //left: width / 6,
    width: (2 * width) / 3,
    //borderWidth: 1,
    flexDirection: "column",
    marginBottom: 10,

    alignItems: "center",
  },
  loginMethodButton: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    borderWidth: 2,
    marginTop: height / 100,
  },
  loginWithPassword: {
    backgroundColor: "#F5C53F",
    borderRadius: 30,
    borderWidth: 2,
    top: height * 0.25,
    width: (2 * width) / 5,
    //left: width / 6,
    alignItems: "center",
    padding: 8,
  },
  createNewAccount: {
    top: height / 3.5,
    justifyContent: "center",
    flexDirection: "row",
    width: width * 0.9,
  },
  createNewAccountText: {
    color: "white",
    fontWeight: "bold",
  },
  signUpLink: {
    color: "#F5C53F",
    fontWeight: "bold",
  },
  userPhNumber: {
    backgroundColor: "white",
    width: (width * 0.5) / 3,
    borderWidth: 2.3,
    borderRadius: 100,
    padding: 5,
    margin: 10,
  },
  dobHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
