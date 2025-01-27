import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Auth } from 'aws-amplify';
import styles from './styles'; // Importing the styles

const AuthScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await Auth.signIn(username, password);
      console.log('User signed in');
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  return (
    <View style={styles.authContainer}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.inputField} 
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputField} 
      />
      <Button title="Sign In" onPress={handleSignIn} style={styles.button} />
    </View>
  );
};

export default AuthScreen;
