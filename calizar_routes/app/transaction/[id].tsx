import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { transactions } from '@/data/transactions';

export default function TransactionDetails() {
  const { id } = useLocalSearchParams();

  const transaction = transactions.find(
    (item) => item.id === id
  );

  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorTitle}>
          Transaction Not Found
        </Text>

        <Text style={styles.errorText}>
          No transaction exists with ID: {id}
        </Text>
      </View>
    );
  }

  const amountText =
    transaction.type === 'income'
      ? `+₱${transaction.amount.toLocaleString()}`
      : `-₱${transaction.amount.toLocaleString()}`;

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Transaction Details',
        }}
      />

      <View style={styles.container}>

        <View style={styles.card}>

          <Text style={styles.name}>
            {transaction.name}
          </Text>

          <Text
            style={[
              styles.amount,
              transaction.type === 'income'
                ? styles.income
                : styles.expense,
            ]}
          >
            {amountText}
          </Text>

          <View style={styles.row}>
            <Text style={styles.label}>
              Category
            </Text>

            <Text style={styles.value}>
              {transaction.category}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Date
            </Text>

            <Text style={styles.value}>
              {transaction.date}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Type
            </Text>

            <Text style={styles.value}>
              {transaction.type}
            </Text>
          </View>

          <View style={styles.noteContainer}>
            <Text style={styles.label}>
              Note
            </Text>

            <Text style={styles.note}>
              {transaction.note}
            </Text>
          </View>

        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F5',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 22,
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#403B43',
  },

  amount: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 20,
  },

  income: {
    color: '#5C9E72',
  },

  expense: {
    color: '#C47B8D',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 15,

    borderBottomWidth: 1,
    borderBottomColor: '#F0E9ED',
  },

  label: {
    fontSize: 14,
    color: '#8A8490',
  },

  value: {
    fontSize: 14,
    fontWeight: '600',
    color: '#403B43',
  },

  noteContainer: {
    marginTop: 20,
  },

  note: {
    fontSize: 14,
    color: '#403B43',
    marginTop: 8,
    lineHeight: 20,
  },

  errorTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#C47B8D',
  },

  errorText: {
    fontSize: 14,
    color: '#8A8490',
    marginTop: 8,
  },
});