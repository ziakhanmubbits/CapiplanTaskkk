
import React, { useState } from 'react';
import {
  View, Text, Alert, Image, TouchableOpacity,
  KeyboardAvoidingView, ScrollView, Platform,
  TouchableWithoutFeedback, Keyboard, StatusBar
} from 'react-native';
import { styles } from './style';
import CustomInput from '../../../components/customInput';
import { height} from "react-native-dimension";

export default function Login({ navigation }) {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log('hello')
    if (!name.trim() || !pass.trim()) {
      setError('All fields are required!');
      return;
    }

    if (pass.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError('');
    Alert.alert('Login Success');
    navigation.navigate('MainApp');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <StatusBar backgroundColor="#d5dbe2ff" barStyle="light-content" />

          <View style={styles.titleContainer}>
            <Image style={styles.logo} source={require('../../../assets/logo.jpeg')} />
          </View>

          <View style={styles.subheadText}>
            <Text style={styles.headTitle}>Login</Text>
            <Text style={styles.logindes}>Log in to access XYZ Corporation LLC.</Text>
          </View>

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <CustomInput
            placeholder="Enter your name"
            value={name}
            onChangeText={(val) => setName(val)}
          />

          <CustomInput
            placeholder="Enter your password"
            secureTextEntry
            value={pass}
            onChangeText={(val) => setPass(val)}
          />

          <View style={styles.forgetpasscont}>
            <Text style={styles.forgetText}>Forget Password?</Text>
          </View>
<View style={{height:height(10)}}/>
          <View style={styles.secondcont}>
            <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signupbuttontxtcontainer}>
              <Text style={styles.linkdes}>
                Don't have an account?{' '}
                <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
                  Signup
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
