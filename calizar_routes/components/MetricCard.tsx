import { StyleSheet, Text, View } from 'react-native';

type MetricCardProps = {
  title: string;
  value: string;
  description: string;
  backgroundColor: string;
};

export default function MetricCard({
  title,
  value,
  description,
  backgroundColor,
}: MetricCardProps) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minHeight: 125,
    borderRadius: 20,
    padding: 18,
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  title: {
    fontSize: 14,
    color: '#6F6875',
  },

  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#403B43',
  },

  description: {
    fontSize: 12,
    color: '#8A8490',
  },
});