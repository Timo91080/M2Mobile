import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Card, Button, Image } from 'react-native-elements';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../style/boxer.jpg')}
        style={styles.image}
      />
      <View style={styles.overlay}>
        {/* Central Button */}
        <Button
          title="Nos formations"
          buttonStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
          onPress={() => console.log('Button pressed')}
        />
        <Text style={styles.description}>
          Notre formation, votre croissance
        </Text>

        {/* Main Card */}
        <Card containerStyle={styles.mainCard}>
          <Image
            source={require('../style/roro.jpg')}
            style={styles.mainCardImage}
          />
          <View style={styles.mainCardContent}>
            <Card.Title style={styles.cardTitle}>Football</Card.Title>
            <Card.Divider />
            <Text style={styles.cardText}>Formation de foot et bien plus encore</Text>
          </View>
        </Card>

        {/* Other Cards */}
        <View style={styles.cardContainer}>
          {/* First Card */}
          <Card containerStyle={styles.card}>
            <Card.Title style={styles.cardTitle}>Compétence</Card.Title>
            <Card.Divider />
            <Text style={styles.cardText}>Vos compétences</Text>
          </Card>

          {/* Second Card */}
          <Card containerStyle={styles.card}>
            <Card.Title style={styles.cardTitle}>Croissance</Card.Title>
            <Card.Divider />
            <Text style={styles.cardText}>Croissance</Text>
          </Card>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  titre: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  description: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
  },
  mainCard: {
    width: '80%',
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#401E43',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    backgroundColor: 'transparent',
    padding: 0,
    overflow: 'hidden',
  },
  mainCardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  mainCardContent: {
    padding: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  card: {
    width: 160,
    borderRadius: 20,
    elevation: 10,
    shadowColor: '#DACCDC',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    backgroundColor: 'transparent',
    padding: 15,
    alignItems: 'center',
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    elevation: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
