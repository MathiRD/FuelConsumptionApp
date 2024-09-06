import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');
  const navigation = useNavigation();

  const handlePress = () => {
    const kmValue = parseFloat(km);
    const litrosValue = parseFloat(litros);
    
    if (isNaN(kmValue) || isNaN(litrosValue) || litrosValue <= 0) {
      alert('Por favor, insira valores válidos.');
      return;
    }

    const mediaConsumo = kmValue / litrosValue;
    
    navigation.navigate('Result', { mediaConsumo });
  };

  return (
    <ImageBackground source={require('../../assets/carImage.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Cálculo de Consumo</Text>
          <View style={styles.card}>
            <Text style={styles.label}>Quilometragem (KM):</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={km}
              onChangeText={setKm}
            />
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>Litros de Gasolina:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={litros}
              onChangeText={setLitros}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Calcular" onPress={handlePress} />
          </View>
        </ScrollView>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C0E0DE',
    textAlign: 'center',
    marginBottom: 20,
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
  },
  label: {
    fontSize: 16,
    color: '#c0e0de',
    marginBottom: 8,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#4F7CAC',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#F8F9FA',
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
    backgroundColor: '#48719C',
  },
});
