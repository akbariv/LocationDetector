import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import {db} from '../../config';
import {ref, set} from 'firebase/database';

const LoginPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const LoginPage = () => {
    set(ref(db, 'users/' + name), {
      name: name,
      password: password,
    });
    setName('');
    setPassword('');
    navigation.navigate('MapScreen');
  };
  return (
    <View style={styles.container}>
      <Text>Insert Data</Text>
      <TextInput
        placeholder="Write Your Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Write Your Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={LoginPage} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    borderRadius:7,
  },
});

export default LoginPage;
