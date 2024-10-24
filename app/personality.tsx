import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { router } from 'expo-router';



const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Personality = () => {
    const traits = ['Creativity', 'Courage', 'Hard Working', 'Disabled']
    const [clicked, setClicked] = useState({
        "Creativity" : false,
        "Courage" : false,
        'Hard Working' : false,
        "Disabled" : false,
        "Teamwork" : false
    })

    const handleNextPress = () => {
      router.navigate("/personality");
    };

    const handleClick = (idVal: any) => {
      //console.log("called")
      setClicked(prevState => ({
        ...prevState,    // Spread the previous state to keep the other properties unchanged
        [idVal]: !prevState[idVal]  // Toggle the value for the clicked element
      }))
      //console.log(clicked)
        
    }

  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginText}>Personality Traits</Text>
      </View>
      <View style ={styles.traitsHolder}>
      {Object.entries(clicked).map(([ele, value]) => <TouchableOpacity onPress={(e) => handleClick(ele)} key={ele} style = {clicked[ele] ? styles.traitSelected : styles.traits}>
            <Text>{ele}</Text>
        </TouchableOpacity>)}
      </View>
      <TouchableOpacity
        style={styles.loginWithPassword}
        onPress={handleNextPress}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

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
        width: width / 2,
        maxHeight: height / 10,
        borderRadius: 10,
      },
      loginText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: 'center',
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
      traitsHolder: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //borderWidth: 1,
        top: height/5,
        width: width * 0.9

      },
      traits: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        width: width * 0.5,
        padding: 10,
        alignItems: 'center',
        margin: 10
      },
      traitSelected: {
        backgroundColor: '#F5C53F',
        borderRadius: 10,
        borderWidth: 2,
        width: width * 0.5,
        padding: 10,
        alignItems: 'center',
        margin: 10
      }
});

export default Personality;