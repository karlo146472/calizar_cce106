import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { tasks } from "../../data/tasks";

export default function TaskDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const task = tasks.find((item) => item.id === id);

  const [status, setStatus] = useState<
    "Pending" | "Completed"
  >(task?.status ?? "Pending");

  if (!task) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.center}>
          <Text style={styles.notFound}>
            Task Not Found
          </Text>

          <Text style={styles.description}>
            No task exists with ID {id}.
          </Text>

          <Pressable
            onPress={() => router.back()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Go Back
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const toggleStatus = () => {
    setStatus((current) =>
      current === "Pending"
        ? "Completed"
        : "Pending"
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.card}>

          <Text style={styles.subject}>
            {task.subject}
          </Text>

          <Text style={styles.title}>
            {task.title}
          </Text>

          <Text style={styles.label}>
            Due Date
          </Text>

          <Text style={styles.value}>
            {task.dueDate}
          </Text>

          <Text style={styles.label}>
            Status
          </Text>

          <Text
            style={[
              styles.value,
              status === "Completed"
                ? styles.completed
                : styles.pending,
            ]}
          >
            {status}
          </Text>

          <Pressable
            onPress={toggleStatus}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              {status === "Pending"
                ? "Mark as Completed"
                : "Mark as Pending"}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backText}>
              Back
            </Text>
          </Pressable>

        </View>

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
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DD",
    borderRadius: 16,
    padding: 22,
  },

  subject: {
    fontSize: 13,
    color: "#8576A8",
    fontWeight: "600",
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#34363B",
    marginTop: 7,
    marginBottom: 20,
  },

  label: {
    fontSize: 12,
    color: "#999CA2",
    marginTop: 12,
  },

  value: {
    fontSize: 15,
    fontWeight: "600",
    color: "#34363B",
    marginTop: 4,
  },

  completed: {
    color: "#6F9B7A",
  },

  pending: {
    color: "#C58B63",
  },

  button: {
    backgroundColor: "#EDE7F6",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 22,
  },

  buttonText: {
    color: "#6F6290",
    fontWeight: "600",
  },

  backButton: {
    padding: 14,
    alignItems: "center",
  },

  backText: {
    color: "#777B82",
    fontWeight: "600",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  notFound: {
    fontSize: 24,
    fontWeight: "700",
    color: "#34363B",
  },

  description: {
    marginTop: 8,
    color: "#777B82",
    textAlign: "center",
  },
});