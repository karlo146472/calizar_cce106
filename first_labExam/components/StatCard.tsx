import { StyleSheet, Text, View } from "react-native";

type StatCardProps = {
  label: string;
  value: number;
};

export default function StatCard({
  label,
  value,
}: StatCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E1DD",
    borderRadius: 14,
    padding: 16,
    margin: 5,
  },

  value: {
    fontSize: 26,
    fontWeight: "700",
    color: "#8576A8",
  },

  label: {
    marginTop: 5,
    fontSize: 13,
    color: "#777B82",
  },
});