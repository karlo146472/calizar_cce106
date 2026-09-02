import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {

  const [name, setName] = useState('Karl Jun Calizar');
  const [subject, setSubject] = useState('CCE 106');
  const [code, setCode] = useState('2013');
  const [about, setAbout] = useState(
    'Penny is a personal expense tracker that helps users manage their finances by recording income and expenses, organizing transactions, and monitoring spending habits.'
  );

  const [editName, setEditName] = useState('');
  const [editSubject, setEditSubject] = useState('');
  const [editCode, setEditCode] = useState('');
  const [editAbout, setEditAbout] = useState('');

  const saveChanges = () => {
    if (editName !== '') {
      setName(editName);
    }

    if (editSubject !== '') {
      setSubject(editSubject);
    }

    if (editCode !== '') {
      setCode(editCode);
    }

    if (editAbout !== '') {
      setAbout(editAbout);
    }
  };

  return (
    <ScrollView style={{backgroundColor:'#B7BDF7'}}>
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
          <Text style={styles.value}>{name}</Text>

          <Text style={styles.label}>Subject</Text>
          <Text style={styles.value}>{subject}</Text>

          <Text style={styles.label}>Code</Text>
          <Text style={styles.value}>{code}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>About Penny</Text>

          <Text style={styles.description}>
            {about}
          </Text>
        </View>

      </View>
        <View style={styles.inputCon}>
            <Text style={styles.customInpHead}>Edit Information</Text>

            <TextInput
              placeholder="Name"
              style={styles.customInput}
              value={editName}
              onChangeText={setEditName}
            ></TextInput>

            <TextInput
              placeholder="Subject"
              style={styles.customInput}
              value={editSubject}
              onChangeText={setEditSubject}
            ></TextInput>

            <TextInput
              placeholder="Code"
              style={styles.customInput}
              value={editCode}
              onChangeText={setEditCode}
            ></TextInput>

            <TextInput
              placeholder="About"
              style={styles.customInput}
              value={editAbout}
              onChangeText={setEditAbout}
            ></TextInput>
          
            <Pressable onPress={saveChanges}>
              <Text style={styles.customBtn}>Save</Text>
            </Pressable>
        </View>
    </ScrollView>
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


    customInpHead:{
      fontSize:20,
      textAlign:'center',
      marginBottom:20,
      marginTop:10,
      fontWeight:'bold',
      color:'#333446'
    }
    ,

    customInput:{
      backgroundColor:'white',
      marginVertical:8,
      borderRadius:5,
      paddingLeft:10
    },

    inputCon:{
      backgroundColor:'#FFF8DE',
      marginHorizontal:25,
      marginBottom:20,
      paddingHorizontal:10,
      paddingVertical:10,
      borderRadius:5
    },

    customBtn:{
      marginHorizontal:'auto',
      marginVertical:20,
      backgroundColor: '#576A8F',
      paddingHorizontal:50,
      paddingVertical:10,
      color: '#FFF8DE',
      fontWeight:'bold',
      borderRadius:5
    }
  });