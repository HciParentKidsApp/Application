import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native'
import { Link, useRouter } from 'expo-router';
import React, {useState} from 'react'
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const SignUp = () => {
  const router = useRouter();
  const [mob, setMob] = useState("");
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");

  const handleMobChange = (mobile : any) => {
    setMob(mobile);
  }

  const handlePassChange = (pass1 : any) => {
    setPass(pass1);
  }

  const handleConPassChange = (pass2 : any) => {
    setConPass(pass2);
  }


  const handleSignUpPress = () => {
    /*if(mob.length !== 10) {
      return;
    }
    if (pass != conPass) {
      return;
    }*/
    router.navigate('/kidsdetails');
  }
  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginText}>Create your account</Text>
      </View>
      <View style={styles.loginMethodHolder}>
        <TextInput onChangeText={(mobile) => handleMobChange(mobile)} value={mob} style = {styles.userPhNumber} placeholder=' Phone Number' keyboardType='numeric'></TextInput>
        <TextInput onChangeText={(password) => handlePassChange(password)} value={pass} style = {styles.userPhNumber} placeholder=' Password' secureTextEntry={true}></TextInput>
        <TextInput onChangeText={(conPassword) => handleConPassChange(conPassword)} value={conPass} style = {styles.userPhNumber} placeholder=' Confirm Password' secureTextEntry={true}></TextInput>
      </View>
      <TouchableOpacity style={styles.loginWithPassword} onPress={handleSignUpPress}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.createNewAccount}>
        <Text style={styles.createNewAccountText}>Already have an account?</Text>
        <Link href={"/login"} style={styles.signUpLink}>
          {" "}
          Login
        </Link>
      </View>
    </View>
  );
}

export default SignUp

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
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.5,
    borderRadius: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center',
  },

  loginMethodHolder: {
    top: height / 4,
    //left: width / 6,
    width: (2 * width) / 3,
    // borderWidth: 1,
    flexDirection: 'column',


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
    backgroundColor: 'white',
    width: width * 0.5,
    borderWidth: 2.3,
    borderRadius: 100,
    padding: 5,
    margin: 10,

  }
});