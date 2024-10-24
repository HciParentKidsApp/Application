import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableOpacityBase,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.loginMethodHolder}>
        <TouchableOpacity style={styles.loginMethodButton}>
          <Text>Login with facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginMethodButton}>
          <Text>Login with google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginMethodButton}>
          <Text>Login with apple</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginWithPassword}>
        <Text>Login With Password</Text>
      </TouchableOpacity>
      <View style={styles.createNewAccount}>
        <Text style={styles.createNewAccountText}>Don't have an account?</Text>
        <Link href={"/signup"} style={styles.signUpLink}>
          {" "}
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default Login;

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width / 3,
    maxHeight: height / 12,
    borderRadius: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },

  loginMethodHolder: {
    top: height / 4,
    //left: width / 6,
    width: (2 * width) / 3,

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
    top: height / 3,
    width: (2 * width) / 3,
    //left: width / 6,
    alignItems: "center",
    padding: 8,
  },
  createNewAccount: {
    top: height / 3,
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
});
