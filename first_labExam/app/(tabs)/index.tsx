import { Link } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import StatCard from "../../components/StatCard";
import { tasks } from "../../data/tasks";

export default function Dashboard() {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.brand}>
          StudyFlow
        </Text>

        <Text style={styles.title}>
          Welcome back 
        </Text>

        <Text style={styles.subtitle}>
          Keep track of your studies and tasks.
        </Text>

        <View style={styles.statsRow}>
          <StatCard
            label="Total"
            value={total}
          />

          <StatCard
            label="Completed"
            value={completed}
          />

          <StatCard
            label="Pending"
            value={pending}
          />
        </View>



        <Link href="/(tabs)/tasks" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              View Tasks
            </Text>
          </Pressable>
        </Link>

        <Link href="/(tabs)/profile" asChild>
          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryText}>
              My Profile
            </Text>
          </Pressable>
        </Link>

      </ScrollView>
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

  brand: {
    fontSize: 14,
    fontWeight: "700",
    color: "#8576A8",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#34363B",
  },

  subtitle: {
    marginTop: 7,
    fontSize: 14,
    color: "#777B82",
    lineHeight: 21,
  },

  statsRow: {
    flex:1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginHorizontal: -5,
  },

  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "600",
    color: "#34363B",
  },

  button: {
    backgroundColor: "#EDE7F6",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonText: {
    color: "#6F6290",
    fontWeight: "600",
  },

  secondaryButton: {
    backgroundColor: "#E4EFF8",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
  },

  secondaryText: {
    color: "#617D95",
    fontWeight: "600",
  },
});