import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Text style={styles.title}>
          Settings
        </Text>

        <Text style={styles.sectionTitle}>
          Preferences
        </Text>

        <View style={styles.card}>

          <View style={styles.row}>
            <Text style={styles.label}>
              Currency
            </Text>

            <Text style={styles.value}>
              Philippine Peso (₱)
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Theme
            </Text>

            <Text style={styles.value}>
              Light
            </Text>
          </View>

        </View>

        <Text style={styles.sectionTitle}>
          About
        </Text>

        <View style={styles.card}>

          <View style={styles.row}>
            <Text style={styles.label}>
              Application
            </Text>

            <Text style={styles.value}>
              Penny
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Version
            </Text>

            <Text style={styles.value}>
              1.0.0
            </Text>
          </View>

        </View>

        <Text style={styles.sectionTitle}>
          Account
        </Text>

        <View style={styles.logoutCard}>
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </View>

      </View>
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
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#403B43',
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#8A8490',
    marginBottom: 10,
    marginTop: 10,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 18,
    marginBottom: 15,
  },

  row: {
    minHeight: 58,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomWidth: 1,
    borderBottomColor: '#F0E9ED',
  },

  label: {
    fontSize: 14,
    color: '#403B43',
  },

  value: {
    fontSize: 13,
    color: '#8A8490',
  },

  logoutCard: {
    backgroundColor: '#F8C8DC',
    borderRadius: 18,
    padding: 18,
  },

  logoutText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#A6536B',
  },
});