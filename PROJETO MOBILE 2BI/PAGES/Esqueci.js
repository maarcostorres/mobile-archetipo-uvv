import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
//import { supabase } from '../supabase';

export default function Forgot({ navigation }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleResetPassword = () => {
    setMessage('');
    setMessageType('');

    if (!email) {
      setMessage('Por favor, insira um email válido.');
      setMessageType('error');
      return;
    }

    // Simulando envio de email
    setTimeout(() => {
      setMessage('Um link de redefinição de senha foi enviado para o seu email.');
      setMessageType('success');
      setTimeout(() => {
        navigation.navigate('Reset');
      }, 2000);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/back.gif')} style={styles.background}></ImageBackground>
      <View style={styles.contentBox}>
        <Text style={styles.p1}>Esqueceu sua senha?</Text>
        {message ? (
          <Text style={[styles.message, messageType === 'error' ? styles.error : styles.success]}>{message}</Text>
        ) : null}
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
          theme={{ colors: { primary: '#0066cc' } }}
        />
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.cancelar}>Cancelar</Text>
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
  p1: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  p2: {
    color: 'white',
    fontSize: 12,
    padding: 10,
    textAlign: 'center',
  },
  contentBox: {
    backgroundColor: 'rgba(128, 128, 128, 0.2)',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  emailBox: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    height: 55,
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
  buttonSecondary: {
    backgroundColor: '#ccc',
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  message: {
    marginBottom: 20,
    fontSize: 12,
    textAlign: 'center',
  },
  error: {
    color: 'black',
  },
  success: {
    color: 'black',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
