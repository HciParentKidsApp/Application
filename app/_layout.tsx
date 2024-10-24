import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");

        // Set isLoggedIn to true if token exists, otherwise false
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error("Error fetching token:", error);
        // In case of error, set login status to false
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    // Show a loading indicator while checking the login status
    return null; // Or you can return a loading spinner here
  }

  return (
    <Stack>
      {isLoggedIn ? (
        <Stack.Screen name="index"/>
      ) : (
        <>
          <Stack.Screen name="login" />
          <Stack.Screen name="signup" />
        </>
      )}
    </Stack>
  );
}
