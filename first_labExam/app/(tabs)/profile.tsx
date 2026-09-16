import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const [name, setName] = useState("Karlo");
  const [program, setProgram] = useState(
    "BS Information Technology"
  );

  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  const [courseError, setCourseError] = useState("");
  const [saveCourse, setSaveCourse] = useState(false)

  const handleSave = () => {
    if (name.trim() === "") {
      setError("Full name is required.");
      setSaved(false);
      return;
    }

    setError("");
    setSaved(true);

    if (program.trim() === "") {
        setCourseError("course is required.");
        setSaveCourse(false);
        return;
      }
  

    setCourseError("");
    setSaveCourse(true);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <Text style={styles.title}>
          My Profile
        </Text>

        <Text style={styles.subtitle}>
          Update your student information.
        </Text>

        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {name.charAt(0).toUpperCase()}
            </Text>
          </View>

          <Text style={styles.profileName}>
            {name || "Student"}
          </Text>

          <Text style={styles.profileProgram}>
            {program}
          </Text>
        </View>

        <Text style={styles.label}>
          Full Name
        </Text>

        <TextInput
          value={name}
          onChangeText={(text) => {
            setName(text);
            setSaved(false);
          }}
          placeholder="Enter your full name"
          placeholderTextColor="#A5A7AB"
          style={[
            styles.input,
            error !== "" && styles.inputError,
          ]}
        />

        {error !== "" && (
          <Text style={styles.error}>
            {error}
          </Text>
        )}

        <Text style={styles.label}>
          Program / Course
        </Text>


        <TextInput
          value={program}
          onChangeText={(text) => {
            setProgram(text);
            setSaved(false);
          }}
          placeholder="Enter your program"
          placeholderTextColor="#A5A7AB"
          style={[
            styles.input,
            courseError !== "" && styles.inputError,
          ]}
        />

        {courseError !== "" && (
          <Text style={styles.error}>
            {courseError}
          </Text>
        )}


        <Pressable
          onPress={handleSave}
          style={({ pressed }) => [
            styles.saveButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.saveText}>
            Save Changes
          </Text>
        </Pressable>

        {saved && saveCourse &&(
          <Text style={styles.success}>
            Profile saved successfully.
          </Text>
        )}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FAF8F6",
  },

  container: {
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#34363B",
  },

  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: "#777B82",
  },

  profile: {
    backgroundColor: "#EDE7F6",
    borderRadius: 16,
    padding: 22,
    alignItems: "center",
    marginTop: 22,
    marginBottom: 20,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 26,
    fontWeight: "700",
    color: "#8576A8",
  },

  profileName: {
    marginTop: 10,
    fontSize: 19,
    fontWeight: "700",
    color: "#34363B",
  },

  profileProgram: {
    marginTop: 4,
    fontSize: 13,
    color: "#777B82",
    textAlign: "center",
  },

  label: {
    marginTop: 12,
    marginBottom: 7,
    fontSize: 13,
    fontWeight: "600",
    color: "#55585E",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DD",
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    color: "#34363B",
  },

  inputError: {
    borderColor: "#D99A8C",
  },

  error: {
    color: "#B96F60",
    fontSize: 12,
    marginTop: 5,
  },

  saveButton: {
    backgroundColor: "#E5F1E8",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 22,
  },

  saveText: {
    color: "#5F886A",
    fontWeight: "600",
  },

  success: {
    color: "#6F9B7A",
    fontSize: 13,
    textAlign: "center",
    marginTop: 12,
  },

  pressed: {
    opacity: 0.6,
  },
});