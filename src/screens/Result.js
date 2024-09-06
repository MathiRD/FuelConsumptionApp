import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Result({ route }) {
  const { mediaConsumo } = route.params;

  let classificacao;

  if (mediaConsumo > 12) {
    classificacao = 'A';
    classificacaoStyle = styles.classificacaoA;
  } else if (mediaConsumo > 8) {
    classificacao = 'B';
    classificacaoStyle = styles.classificacaoB;
  } else if (mediaConsumo > 5) {
    classificacao = 'C';
    classificacaoStyle = styles.classificacaoC;
  } else {
    classificacao = 'E';
    classificacaoStyle = styles.classificacaoE;
  }

  return (
    <ImageBackground source={require('../../assets/carImage.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Resultado</Text>
          <View style={styles.card}>
            <Text style={styles.result}>Média de Consumo:</Text>
            <Text style={styles.resultValue}>{mediaConsumo.toFixed(2)} Km/L</Text>
          </View>
          <View style={styles.classificacaoContainer}>
            <Text style={styles.classificacaoText}>Classificação: </Text>
            <Text style={[styles.classificacao, classificacaoStyle]}>{classificacao}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
    width: '90%',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C0E0DE',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#6B8380',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20,
    padding: 16,
    alignItems: 'center',
  },
  result: {
    fontSize: 18,
    color: '#C0E0DE',
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#41678E',
    marginVertical: 10,
  },
  classificacaoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  classificacaoText: {
    fontSize: 24,
    color: '#C0E0DE'
  },
  classificacao: {
    fontSize: 24,
  },
  classificacaoA: {
    color: 'green',
  },
  classificacaoB: {
    color: 'lightgreen',
  },
  classificacaoC: {
    color: 'yellow',
  },
  classificacaoE: {
    color: 'red',
  },
});
