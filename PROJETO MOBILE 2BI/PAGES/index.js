import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Dados from '../DATA/Dados.js';
//import { supabase } from '../supabase';

function Card({ elemento }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.pCard}>Grupo: {elemento.nome}</Text>
      <Text style={styles.pCard}>Nota: {elemento.nota}</Text>
      <TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
        <Text style={styles.toggleText}>{showDetails ? 'Ver Menos' : 'Ver Mais'}</Text>
      </TouchableOpacity>
      {showDetails && (
        <>
          <Text style={styles.pCard}>Descrição: {elemento.descricao}</Text>
          <Text style={styles.pCard}>Integrantes: {elemento.integrantes.join(', ')}</Text>
        </>
      )}
    </View>
  );
}

export default function Main({ navigation }) {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    // Simula a busca de dados do arquivo Dados.js
    setTimeout(() => {
      setGrupos(Dados);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/back.gif')} style={styles.background}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.headerText}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Olá, confira os projetos para o InovaWeek 2025!</Text>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {grupos.map((grupo) => (
              <Card key={grupo.id} elemento={grupo} />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  header: {
    padding: 10,
    backgroundColor: 'white',
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    width: 280,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 15,
    alignItems: 'flex-start',
  },
  pCard: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  toggleText: {
    color: 'Blue',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
