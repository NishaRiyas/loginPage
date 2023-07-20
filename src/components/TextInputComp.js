import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TextInputComp = ({ value, onChangeText, secureTextEntry, icon, placeholder }) => {
  return (
    <View style={styles.inputRow}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor="white"
      />
      {icon && <MaterialIcons name={icon} style={styles.icon} size={20} color="white" />}
    </View>
  );
};

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
    marginTop:'10%',
  },
  icon: {
    color: 'white',
    alignSelf: 'flex-end',
    right: '40%',
    paddingBottom: '4%',
  },
});

export default TextInputComp;
