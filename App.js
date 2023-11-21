import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Location from 'expo-location'

// bare mimium proejcts requite more congifuration
// we can use all the packages 
// but woth additonal settings and config


// below we have installed expo location package 
// and used its functionalites 
// we ll have to see documentation to better understand

// not super difficult but required bit setup

// we can eject from manage workflow --which we have done through the coure
// to bare workflow 

export default function App() {
  async function getUserLocationHandler() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granter") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
  }

  return (
    <View style={styles.container}>
     <Button onPress={getUserLocationHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
