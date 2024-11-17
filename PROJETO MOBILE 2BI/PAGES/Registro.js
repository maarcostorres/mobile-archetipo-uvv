import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
//import { supabase } from '../supabase';

export default function Register({ navigation }) {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = () => {
    setMessage('');
    setMessageType('');

    if (!nomeCompleto || !email || !senha) {
      setMessage('Por favor, preencha todos os campos.');
      setMessageType('error');
      return;
    }

    if (!isValidEmail(email)) {
      setMessage('Por favor, insira um e-mail válido.');
      setMessageType('error');
      return;
    }

    // Simulação de criação de conta
    setTimeout(() => {
      setMessage('Conta criada com sucesso!');
      setMessageType('success');
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/back.gif')} style={styles.background}></ImageBackground>

      <View style={styles.contentBox}>
        <Text style={styles.p1}>Criar Conta</Text>

        {message ? (
          <Text style={[styles.message, messageType === 'success' ? styles.success : styles.error]}>{message}</Text>
        ) : null}

        <TextInput
          label="Nome Completo"
          value={nomeCompleto}
          onChangeText={(text) => setNomeCompleto(text)}
          style={styles.textInput}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
        />
        <TextInput
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
          style={styles.textInput}
        />

        <View style={styles.containerButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.cancelar}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
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
  p1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    marginBottom: 10,
    width: '100%',
    height: 55,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 15,
  },
  cancelar: {
    color: '#0066cc',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#0066cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  message: {
    marginBottom: 15,
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
