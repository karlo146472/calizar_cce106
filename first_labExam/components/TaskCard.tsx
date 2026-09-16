import { Pressable, StyleSheet, Text, View } from "react-native";

type TaskCardProps = {
  title: string;
  subject: string;
  dueDate: string;
  status: "Pending" | "Completed";
  onPress?: () => void;
};

export default function TaskCard({
  title,
  subject,
  dueDate,
  status,
  onPress,
}: TaskCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.row}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.subject}>
            {subject}
          </Text>

          <Text style={styles.date}>
            Due {dueDate}
          </Text>
        </View>

        <View
          style={[
            styles.status,
            status === "Completed"
              ? styles.completed
              : styles.pending,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              status === "Completed"
                ? styles.completedText
                : styles.pendingText,
            ]}
          >
            {status}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DD",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },

  pressed: {
    opacity: 0.65,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#34363B",
  },

  subject: {
    marginTop: 5,
    fontSize: 13,
    color: "#777B82",
  },

  date: {
    marginTop: 5,
    fontSize: 12,
    color: "#999CA2",
  },

  status: {
    paddingVertical: 6,
    paddingHorizontal: 9,
    borderRadius: 8,
    marginLeft: 10,
  },

  completed: {
    backgroundColor: "#E5F1E8",
  },

  pending: {
    backgroundColor: "#F9E8DF",
  },

  statusText: {
    fontSize: 11,
    fontWeight: "600",
  },

  completedText: {
    color: "#6F9B7A",
  },

  pendingText: {
    color: "#C58B63",
  },
});