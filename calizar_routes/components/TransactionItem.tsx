import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

type TransactionItemProps = {
  id: string;
  name: string;
  category: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
};

export default function TransactionItem({
  id,
  name,
  category,
  amount,
  type,
  date,
}: TransactionItemProps) {
  const amountText =
    type === 'income'
      ? `+₱${amount.toLocaleString()}`
      : `-₱${amount.toLocaleString()}`;

  return (
    <Link
      href={{
        pathname: '/transaction/[id]',
        params: {
          id: id,
        },
      }}
      style={styles.link}
    >
      <View style={styles.container}>

        <View style={styles.leftSection}>
          <Text style={styles.name}>
            {name}
          </Text>

          <Text style={styles.category}>
            {category} • {date}
          </Text>
        </View>

        <Text
          style={[
            styles.amount,
            type === 'income'
              ? styles.income
              : styles.expense,
          ]}
        >
          {amountText}
        </Text>

      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'none',
  },

  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  leftSection: {
    flex: 1,
    marginRight: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#403B43',
  },

  category: {
    marginTop: 5,
    fontSize: 12,
    color: '#8A8490',
  },

  amount: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  income: {
    color: '#5C9E72',
  },

  expense: {
    color: '#C47B8D',
  },
});