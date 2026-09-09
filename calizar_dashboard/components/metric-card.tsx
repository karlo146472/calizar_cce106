import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const rem = (value: number) => value * 16;
const {width} = Dimensions.get('window');
const baseWidth = 375;

export const scale = (size:number) => (width / baseWidth) * size;

type MetricCardProp = {
  title: string;
  value: string;
  description: string,
  color: string
};

function MetricCard({title, value, description, color}:MetricCardProp) {
  return (
    <View style = {[styles.customCard, {backgroundColor:color}]}>

      <Text style={styles.customHead}>{title}</Text>
      <View style={styles.customContentCon}>
            <Text style={styles.customContent}>{description}</Text>
            <Text style={styles.customContentValue}>{value}</Text>
      </View>
  
    </View>
  )
}

export default MetricCard;

const styles = StyleSheet.create({
  customCard: {
    paddingHorizontal:10,
    paddingVertical:15,
    flex:1,
    flexDirection:'column',
    gap:10,
    backgroundColor: '#C5B3D3',
    borderRadius: 6,
    marginVertical: 10,
    color: '#292C33',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  customHead: {
    marginHorizontal: scale(10),
    fontSize: rem(1.5)
  },

  customContent: {
   
  },

  customContentValue: {
    fontSize: rem(1.3)
  },
  

  customContentCon:{
    flex:1,
    flexDirection:'row',
    marginHorizontal: scale(10),
    justifyContent:'space-between',
    alignItems:'flex-end'
  }
});