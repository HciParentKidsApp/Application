import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const handleButtonPress = () => {
    router.navigate('/login')
  }
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    padding: 20,
  },
});
