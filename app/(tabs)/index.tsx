import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>COUNTER</Text>

      <View style={styles.counterBox}>
        <Text style={styles.counter}>{counter}</Text>
      </View>

      <Pressable style={styles.increaseButton} onPress={increaseCounter}>
        <Text style={styles.buttonText}>+ INCREASE</Text>
      </Pressable>

      <Pressable style={styles.decreaseButton} onPress={decreaseCounter}>
        <Text style={styles.buttonText}>- DECREASE</Text>
      </Pressable>

      <Pressable style={styles.resetButton} onPress={resetCounter}>
        <Text style={styles.buttonText}>RESET</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101820",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00BFFF",
    marginBottom: 5,
  },

  counterBox: {
    width: 220,
    height: 150,
    backgroundColor: "#1B2735",
    borderWidth: 2,
    borderColor: "#00BFFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  counter: {
    fontSize: 70,
    fontWeight: "bold",
    color: "white",
  },

  increaseButton: {
    backgroundColor: "#007248",
    width: 220,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  decreaseButton: {
    backgroundColor: "#c96e00",
    width: 220,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  resetButton: {
    backgroundColor: "#a8000e",
    width: 220,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
