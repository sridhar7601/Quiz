import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

const styles = {
  contentContainer: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  card: {
    minHeight: 100,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  scrollContent: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  scrollText: {
    fontSize: 16,
    marginBottom: 5,
  },
};

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/cards').then((response) => {
      setCards(response.data);
    });
  }, []);

  return (
    <ScrollView>
      {cards.map((card, index) => (
        <View key={index} style={styles.contentContainer}>
          <LinearGradient
            colors={['#f731db', '#4600f1']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}>
            <Text style={styles.heading}>{card.heading}</Text>
            {card.subheadings.map((subheading, index) => (
              <Text key={index} style={styles.subheading}>
                {subheading}
              </Text>
            ))}
          </LinearGradient>
          <View style={styles.scrollContent}>
            {Array.from({ length: 50 }).map((_, index) => (
              <Text key={index} style={styles.scrollText}>
                Scrollable Content {index + 1}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Cards;
