import React from 'react';
import { StatusBar, TouchableOpacity, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Alert, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';

export default function SignUpFile() {
  const { navigate } = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const predefinedUsername = 'Nisha';
  const predefinedEmail = 'abc@gmail.com';
  const predefinedPassword = 'abc123';

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    setValidEmail(isValid);
  };
  
  const handleEmailChange = (text) => {
    setEmail(text);
    validateEmail(text);
  };
  

  const handleSignUp = () => {
    if (isChecked) {
      if (username === predefinedUsername && validEmail && password === predefinedPassword) {
        Alert.alert(
          'Login Successful',
          `Username: ${username}\nEmail ID: ${email}\nPassword: ${password}`,
          [
            {
              text: 'Cancel',
            },
            {
              text: 'OK',
              // onPress: () => {
              //   navigate('NextScreen');
              // },
            },
          ]
        );
      } else {
        Alert.alert('Login Failed', 'Invalid username, email, or password.');
      }
    } else {
      Alert.alert('Accept the terms and conditions');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>SIGN IN</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>UserName*</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <MaterialIcons name="account-circle" style={styles.icon} size={20} color="white" />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email ID*</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, !validEmail && styles.invalidInput]}
            value={email}
            onChangeText={handleEmailChange}
          />
          <FontAwesome name="search-minus" style={styles.icon} size={20} />
        </View>
        {!validEmail && email.length > 10 && <Text style={styles.errorText}>Invalid email</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password*</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <MaterialIcons
            name={isPasswordVisible ? 'visibility' : 'visibility-off'}
            style={styles.icon}
            size={20}
            color="white"
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        </View>
      </View>

      {/* <View style={styles.checkBoxContainer}>
        <TouchableOpacity style={styles.checkBox} onPress={() => setIsChecked(!isChecked)}>
          {isChecked ? (
            <MaterialIcons name="check-box" size={20} color="white" />
          ) : (
            <MaterialIcons name="check-box-outline-blank" size={20} color="white" />
          )}
        </TouchableOpacity>
        <Text style={styles.checkBoxText}>
          I agree to the <Text style={styles.linkText}>terms and conditions</Text>
        </Text>
      </View> */}
      <View style={styles.checkBoxContainer}>
      <CheckBox isChecked={isChecked} onPress={() => setIsChecked(!isChecked)} />
      <Text style={styles.checkBoxText}>
          I agree to the <Text style={styles.linkText}>terms and conditions</Text>
        </Text>
      </View>
      <Button onPress={() =>
            {
                console.log('Button pressed');
                navigate("HomePage")}}
               title="SIGN IN"/>

      {/* <TouchableOpacity style={styles.button} onPress={() =>
            {
                console.log('Button pressed');
                navigate("HomePage")}}
              >
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity> */}

      {/* <Text style={styles.textDivider}>------------------------- Or Connected With -------------------------</Text>

      <View style={styles.socialMediaIcons}>
        <Entypo name="facebook-with-circle" size={30} color="#0079FC" onPress={() => {
          Alert.alert('FaceBook', 'Do you want to login with Facebook', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            { text: 'OK' },
          ]);
          console.log('Facebook Pressed');
        }} />
        <FontAwesome name="google-plus-official" size={30} color="#F23A2A" onPress={() => {
          Alert.alert('Google', 'Do you want to login with Google+', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            { text: 'OK' },
          ]);
          console.log('Google Pressed');
        }} />
        <Entypo name="twitter-with-circle" size={30} color="#03A3FA" onPress={() => {
          Alert.alert('Twitter', 'Do you want to login with Twitter', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            { text: 'OK' },
          ]);
          console.log('Twitter Pressed');
        }} />
      </View>
      <Text style={styles.textDivider}>
        Already have an account? <Text style={styles.textLink}>SignIn</Text>
      </Text> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#813566',
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    marginTop: '50%',
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputContainer: {
    marginTop: '8%',
  },
  label: {
    color: 'white',
    // marginBottom: 10,
  },
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
    width:'80%'
  },
  icon: {
    color: 'white',
    alignSelf:'flex-end',
    right:'40%',
    paddingBottom:'4%',
    // paddingRight:'20%'
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:'10%',
  },
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    // borderRadius: 4,
    borderColor: 'white',
    marginRight: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxText: {
    color: 'white',
  },
  linkText: {
    color: '#FF1493',
    textDecorationLine: 'underline',
  },
  // button: {
  //   backgroundColor: '#DF3079',
  //   paddingVertical: '4%',
  //   marginTop: '8%',
  //   borderRadius: 20,
  //   alignItems: 'center',
  //   marginHorizontal:'20%'
    
  // },
  // buttonText: {
  //   color: 'white',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  textDivider: {
    marginTop: '8%',
    color: 'white',
    textAlign: 'center',
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '8%',
    paddingHorizontal:'20%'
  },
 
  textLink: {
    color: '#EC379A',
    },
    });