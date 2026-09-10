import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TransactionItem from '@/components/TransactionItem';
import { transactions } from '@/data/transactions';

export default function Transactions() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.title}>
          All Transactions
        </Text>

        <Text style={styles.subtitle}>
          View your complete transaction history.
        </Text>

        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            id={transaction.id}
            name={transaction.name}
            category={transaction.category}
            amount={transaction.amount}
            type={transaction.type}
            date={transaction.date}
          />
        ))}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF8F5',
  },

  container: {
    padding: 20,
    paddingBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#403B43',
  },

  subtitle: {
    fontSize: 14,
    color: '#8A8490',
    marginTop: 5,
    marginBottom: 20,
  },
});