import { router } from "expo-router";
import { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import TaskCard from "../../components/TaskCard";
import { tasks } from "../../data/tasks";

type Filter = "All" | "Pending" | "Completed";

export default function TasksScreen() {
  const [filter, setFilter] = useState<Filter>("All");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    }

    return task.status === filter;
  });

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>
          My Tasks
        </Text>

        <Text style={styles.subtitle}>
          View and manage your activities.
        </Text>

        <View style={styles.filters}>

          <Pressable
            onPress={() => setFilter("All")}
            style={[
              styles.filter,
              filter === "All" && styles.activeFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                filter === "All" && styles.activeText,
              ]}
            >
              All
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setFilter("Pending")}
            style={[
              styles.filter,
              filter === "Pending" && styles.activeFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                filter === "Pending" && styles.activeText,
              ]}
            >
              Pending
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setFilter("Completed")}
            style={[
              styles.filter,
              filter === "Completed" && styles.activeFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                filter === "Completed" && styles.activeText,
              ]}
            >
              Completed
            </Text>
          </Pressable>

        </View>

        <Text style={styles.count}>
          {filteredTasks.length} task(s)
        </Text>

        <View>
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              subject={task.subject}
              dueDate={task.dueDate}
              status={task.status}
              onPress={() => {
                router.push(`/task/${task.id}`);
              }}
            />
          ))}
        </View>

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

  filters: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 12,
  },

  filter: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DD",
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 14,
    marginRight: 8,
  },

  activeFilter: {
    backgroundColor: "#EDE7F6",
    borderColor: "#EDE7F6",
  },

  filterText: {
    color: "#777B82",
    fontSize: 13,
    fontWeight: "600",
  },

  activeText: {
    color: "#6F6290",
  },

  count: {
    fontSize: 12,
    color: "#999CA2",
    marginBottom: 12,
  },
});