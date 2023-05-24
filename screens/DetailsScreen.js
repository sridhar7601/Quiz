import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { cardIndex } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.detailsText}>Details for Card {cardIndex + 1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default DetailsScreen;
