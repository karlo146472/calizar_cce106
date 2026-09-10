import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Text style={styles.title}>
          Profile
        </Text>

        <View style={styles.profileCard}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              KC
            </Text>
          </View>

          <Text style={styles.name}>
            Karl Jun Calizar
          </Text>

          <Text style={styles.accountType}>
            Personal Account
          </Text>

        </View>

        <View style={styles.infoCard}>

          <View style={styles.row}>
            <Text style={styles.label}>
              Email
            </Text>

            <Text style={styles.value}>
              karl@email.com
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Account Type
            </Text>

            <Text style={styles.value}>
              Personal
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>
              Member Since
            </Text>

            <Text style={styles.value}>
              September 2026
            </Text>
          </View>

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
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: '#B8A9E8',
    borderRadius: 22,
    padding: 25,
    alignItems: 'center',
  },

  avatar: {
    width: 75,
    height: 75,
    borderRadius: 38,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  avatarText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7B68B2',
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  accountType: {
    fontSize: 14,
    color: '#F4F0FF',
    marginTop: 5,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginTop: 15,
  },

  row: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0E9ED',
  },

  label: {
    fontSize: 13,
    color: '#8A8490',
    marginBottom: 5,
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#403B43',
  },
});