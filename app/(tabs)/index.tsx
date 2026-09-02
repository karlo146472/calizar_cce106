import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Calculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator: string) => {
    if (number1 === "" || number2 === "") {
      setResult("Enter both numbers!");
      return;
    }

    const num1 = Number(number1);
    const num2 = Number(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Invalid number!");
      return;
    }

    if (operator === "+") {
      setResult(String(num1 + num2));
    } else if (operator === "-") {
      setResult(String(num1 - num2));
    } else if (operator === "×") {
      setResult(String(num1 * num2));
    } else if (operator === "÷") {
      if (num2 === 0) {
        setResult("Cannot divide by zero!");
        return;
      }

      setResult(String(num1 / num2));
    }
  };

  const clearCalculator = () => {
    setNumber1("");
    setNumber2("");
    setResult("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> CALCULATOR</Text>

      <View style={styles.card}>
        <Text style={styles.label}>FIRST NUMBER</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter number"
          placeholderTextColor="#777"
          keyboardType="numeric"
          value={number1}
          onChangeText={setNumber1}
        />

        <Text style={styles.label}>SECOND NUMBER</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter number"
          placeholderTextColor="#777"
          keyboardType="numeric"
          value={number2}
          onChangeText={setNumber2}
        />

        <Text style={styles.operatorTitle}>SELECT OPERATION</Text>

        <View style={styles.row}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.addButton,
              pressed && styles.pressed,
            ]}
            onPress={() => calculate("+")}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.subtractButton,
              pressed && styles.pressed,
            ]}
            onPress={() => calculate("-")}
          >
            <Text style={styles.buttonText}>−</Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.multiplyButton,
              pressed && styles.pressed,
            ]}
            onPress={() => calculate("×")}
          >
            <Text style={styles.buttonText}>×</Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.divideButton,
              pressed && styles.pressed,
            ]}
            onPress={() => calculate("÷")}
          >
            <Text style={styles.buttonText}>÷</Text>
          </Pressable>
        </View>

        <View style={styles.resultBox}>
          <Text style={styles.resultLabel}>RESULT</Text>

          <Text style={styles.result}>{result === "" ? "---" : result}</Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.clearButton,
            pressed && styles.pressed,
          ]}
          onPress={clearCalculator}
        >
          <Text style={styles.clearText}>CLEAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101820",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#1B2631",
    borderRadius: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: "#263A4A",
  },

  label: {
    color: "#00A8FF",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 7,
  },

  input: {
    backgroundColor: "#0D141A",
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#34495E",
    borderRadius: 10,
    padding: 14,
    fontSize: 18,
    marginBottom: 18,
  },

  operatorTitle: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  button: {
    width: "48%",
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  addButton: {
    backgroundColor: "#087F5B",
  },

  subtractButton: {
    backgroundColor: "#D35400",
  },

  multiplyButton: {
    backgroundColor: "#2874A6",
  },

  divideButton: {
    backgroundColor: "#6C3483",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.6,
    transform: [{ scale: 0.97 }],
  },

  resultBox: {
    backgroundColor: "#0D141A",
    borderRadius: 12,
    padding: 18,
    marginTop: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00A8FF",
  },

  resultLabel: {
    color: "#00A8FF",
    fontSize: 12,
    fontWeight: "bold",
  },

  result: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },

  clearButton: {
    backgroundColor: "#34495E",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },

  clearText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
