import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleLogin = () => {
    // Simula login bem-sucedido mesmo com campos vazios
    setMessage('Login bem-sucedido');
    setMessageType('success');
    setTimeout(() => {
      navigation.navigate('index');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/back.gif')} style={styles.background}></ImageBackground>
      <View style={styles.contentBox}>
        <Text style={styles.p}>Bem-vindo!</Text>
        {message ? (
          <Text style={[styles.message, messageType === 'error' ? styles.error : styles.success]}>{message}</Text>
        ) : null}
        <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.textInput} />
        <TextInput label="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={styles.textInput} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Esqueci')}>
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
          <Text style={styles.link}>Criar uma Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006673',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentBox: {
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  p: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: '#0066cc',
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textInput: {
    backgroundColor: 'white',
    marginBottom: 10,
    width: '100%',
    height: 55,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  esqueceu: {
    textAlign: 'center',
    color: '#0066cc',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  message: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    color: 'black',
  },
  success: {
    color: 'black',
  },
});
