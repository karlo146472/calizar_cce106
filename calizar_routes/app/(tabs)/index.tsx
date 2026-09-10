import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MetricCard from '@/components/MetricCard';
import TransactionItem from '@/components/TransactionItem';
import { transactions } from '@/data/transactions';

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >

        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>
              Welcome back
            </Text>

            <Text style={styles.title}>
              Penny
            </Text>
          </View>

          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => router.push('/profile')}
          >
            <Text style={styles.profileText}>
              KC
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>
            Current Balance
          </Text>

          <Text style={styles.balanceValue}>
            ₱12,500
          </Text>

          <Text style={styles.balanceDescription}>
            Your available balance
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Overview
        </Text>

        <View style={styles.metricRow}>

          <MetricCard
            title="Spending"
            value="₱2,900"
            description="This month"
            backgroundColor="#F8C8DC"
          />

          <View style={styles.cardSpacing} />

          <MetricCard
            title="Income"
            value="₱5,000"
            description="This month"
            backgroundColor="#BDE0FE"
          />

        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Recent Transactions
          </Text>

        <TouchableOpacity
          onPress={() => router.push('/transactions')}
        >
          <Text style={styles.viewAll}>
            View All
          </Text>
        </TouchableOpacity>

        </View>

        {transactions.slice(0, 3).map((transaction) => (
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

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  smallText: {
    fontSize: 13,
    color: '#8A8490',
    marginBottom: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#403B43',
  },

  profileButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#B8A9E8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  balanceCard: {
    backgroundColor: '#B7E4C7',
    borderRadius: 22,
    padding: 22,
    marginBottom: 25,
  },

  balanceLabel: {
    fontSize: 14,
    color: '#55735F',
  },

  balanceValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#304F39',
    marginTop: 8,
  },

  balanceDescription: {
    fontSize: 12,
    color: '#55735F',
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#403B43',
    marginBottom: 12,
  },

  metricRow: {
    flexDirection: 'row',
  },

  cardSpacing: {
    width: 12,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 12,
  },

  viewAll: {
    fontSize: 13,
    fontWeight: '600',
    color: '#7B68B2',
  },
});