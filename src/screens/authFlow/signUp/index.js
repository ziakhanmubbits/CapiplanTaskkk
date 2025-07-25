import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import CustomInput from '../../../components/customInput';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './style'; 
import { width,height,totalSize } from "react-native-dimension";

const Signup = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    companyName: '',
    companyEmail: '',
    companyWebsite: '',
    contactName: '',
    contactNumber: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSignup = () => {
    const { companyName, companyEmail, companyWebsite, contactName, contactNumber } = form;
    if (!companyName || !companyEmail || !companyWebsite || !contactName || !contactNumber) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    Alert.alert('Success', 'Account created successfully!', [
      { text: 'OK', onPress: () => navigation.navigate('Login') },
    ]);
  };

  return (
    <>
      <StatusBar backgroundColor="#d5dbe2ff" barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={[Styles.container, { paddingBottom: 40 }]}
            keyboardShouldPersistTaps="handled"
          >
            <View style={Styles.tophead}>
              <Text style={Styles.heading}>Sign-Up Request</Text>
            </View>
           <View>
            <CustomInput
              label="Company Name"
              placeholder="Enter Company Name"
              value={form.companyName}
              onChangeText={(text) => handleChange('companyName', text)}
            />
            <CustomInput
              label="Company Email"
              placeholder="Enter Company Email"
              value={form.companyEmail}
              onChangeText={(text) => handleChange('companyEmail', text)}
            />
            <CustomInput
              label="Company Website"
              placeholder="Enter Website"
              value={form.companyWebsite}
              onChangeText={(text) => handleChange('companyWebsite', text)}
            />
            <CustomInput
              label="Contact Name"
              placeholder="Enter Contact Name"
              value={form.contactName}
              onChangeText={(text) => handleChange('contactName', text)}
            />
            <CustomInput
              label="Contact Number"
              placeholder="Enter Contact Number"
              value={form.contactNumber}
              onChangeText={(text) => handleChange('contactNumber', text)}
            />
</View>
<View style={{height:height(10)}}/>
            <View style={Styles.secondcont}>
              <TouchableOpacity style={Styles.buttonStyle} onPress={handleSignup}>
                <Text style={Styles.btnText}>Signup</Text>
              </TouchableOpacity>
              <View style={Styles.signupbuttontxtcontainer}>
                <Text style={Styles.linkdes} onPress={() => navigation.navigate('Login')}>
                  Already have an account? <Text style={Styles.link}>Login</Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default Signup;
