import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CheckBox = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity style={styles.checkBox} onPress={onPress}>
      {isChecked ? (
        <MaterialIcons name="check-box" size={20} color="white" />
      ) : (
        <MaterialIcons name="check-box-outline-blank" size={20} color="white" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CheckBox;
