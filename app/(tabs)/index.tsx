import { Image, StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.bodyStyle}>

      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png'
        }}
        style={styles.image}
      />

      <View style={styles.headerContainer}>
        <Text style={styles.headerStyle}>Penny</Text>

        <Text style={styles.subHead}>
          A simple way to track, organize, and understand your spending.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Student Information</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Karl Jun Calizar</Text>

        <Text style={styles.label}>Subject</Text>
        <Text style={styles.value}>CCE 106</Text>

        <Text style={styles.label}>Code</Text>
        <Text style={styles.value}>2013</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>About Penny</Text>

        <Text style={styles.description}>
          Penny is a personal expense tracker that helps users manage their
          finances by recording income and expenses, organizing transactions,
          and monitoring spending habits.
        </Text>

        <Text style={styles.description}>
          View your balance, total income, expenses, and spending summaries
          in one simple dashboard.
        </Text>
      </View>

    </View>
  );
}

  const styles = StyleSheet.create({
    bodyStyle: {
      flex: 1,
      backgroundColor: '#B7BDF7',
      paddingHorizontal: 25,
    },

    image: {
      width: 160,
      height: 160,
      alignSelf: 'center',
      marginTop: 70,
    },

    headerContainer: {
      marginTop: 10,
      marginBottom: 25,
    },

    headerStyle: {
      color: '#FFF8DE',
      fontSize: 44,
      fontWeight: 'bold',
    },

    subHead: {
      color: '#576A8F',
      fontSize: 16,
      lineHeight: 23,
      marginTop: 5,
    },

    card: {
      backgroundColor: '#FFF8DE',
      borderRadius: 20,
      padding: 20,
      marginBottom: 15,
    },

    cardTitle: {
      color: '#333446',
      fontSize: 19,
      fontWeight: 'bold',
      marginBottom: 15,
    },

    label: {
      color: '#888888',
      fontSize: 13,
      marginTop: 5,
    },

    value: {
      color: '#333446',
      fontSize: 16,
      fontWeight: '600',
      marginBottom: 8,
    },

    description: {
      color: '#576A8F',
      fontSize: 14,
      lineHeight: 21,
      marginBottom: 8,
    },

  });