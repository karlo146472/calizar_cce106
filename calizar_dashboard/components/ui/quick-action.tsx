import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type QuickActionProps = {
  title: string;
  onPress: () => void;
};

function QuickAction({ title, onPress }: QuickActionProps) {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <Text style={styles.actionText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default QuickAction;

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 132,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  actionText: {
    fontWeight: '600',
    color: '#292C33',
  },
});