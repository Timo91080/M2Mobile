import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../AuthContexte';

const Profile = () => {
  const { utilisateur } = useAuth();
  const [inscriptions, setInscriptions] = useState([]);
  const [formationsFavorites, setFormationsFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (utilisateur) {
      fetch(`http://10.193.112.177:8082/inscriptions/${utilisateur.id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Échec de la requête');
          }
          return res.json();
        })
        .then((data) => {
          setInscriptions(data);
        })
        .catch((err) => {
          console.error(err);
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });

      fetch(`http://192.168.1.33:8088/favoris/${utilisateur.id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Échec de la requête');
          }
          return res.json();
        })
        .then((data) => {
          setFormationsFavorites(data);
        })
        .catch((err) => {
          console.error(err);
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [utilisateur]);

  const FormationCard = ({ formation }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{formation.formation}</Text>
      <Text>Date d'inscription : {formation.date}</Text>
    </View>
  );

  return (
    <View style={styles.profileContainer}>
      
      <Text style={styles.heading}>Profil Utilisateur</Text>
      {utilisateur && (
        <>

          <Text>Email: {utilisateur.email}</Text>
          <Text>Nom: {utilisateur.nom}</Text>
          <Text>Prénom: {utilisateur.prenom}</Text>

          <Text style={styles.heading}>Formations Favorites :</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {formationsFavorites.map((item) => (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardTitle}>
                  Formation : {item.formation}
                </Text>
                <Text>Date d'ajout aux favoris : {item.date}</Text>
              </View>
            ))}
          </ScrollView>

          <Text style={styles.heading}>Formations Inscrites :</Text>
          <FlatList
            data={inscriptions}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2} // Définir le nombre de colonnes à 2
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => console.log(`Voir les détails de la formation ${item.id}`)}>
                <FormationCard formation={item} />
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  card: {
    width: 200,
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Profile;
