import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Reusable Card Component
const Card = ({ heading, subheadings, onPress }) => (
<TouchableOpacity onPress={onPress}>
<LinearGradient
colors={['#f731db', '#4600f1']}
start={{ x: 0, y: 1 }}
end={{ x: 1, y: 1 }}
style={styles.card}
>
<Text style={styles.heading}>{heading}</Text>
{subheadings.map((subheading, index) => (
<Text key={index} style={styles.subheading}>
{subheading}
</Text>
))}
</LinearGradient>
</TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
const dummyData = [
    {
        heading: 'HTML',
        subheadings: ['Duration: 10:00', 'Easy', 'MCQ'],
      },
      {
        heading: 'CSS',
        subheadings: ['Duration: 10:00', 'Easy', 'MCQ'],
      },
      {
        heading: 'JS',
        subheadings: ['Duration: 10:00', 'Easy', 'MCQ'],
      },
      {
        heading: 'PYTHON',
        subheadings: ['Duration: 10:00', 'Easy', 'MCQ'],
      },
      {
        heading: 'CPP',
        subheadings: ['Duration: 10:00', 'Easy', 'MCQ'],
      },
    ];const handleCardPress = (index) => {
navigation.navigate('Details', { cardIndex: index });
};

return (
<View style={styles.container}>
<View style={styles.header}>
{/* <Image source={require('../profile-icon.png')} style={styles.profileIcon} /> */}
<Text style={styles.welcomeText}>Welcome Back!</Text>
</View>
<View style={styles.cardContainer}>
{dummyData.map((card, index) => (
<Card
key={index}
{...card}
onPress={() => handleCardPress(index)}
/>
))}
</View>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
},
header: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
paddingVertical: 20,
paddingHorizontal: 10,
},
// profileIcon: {
// width: 25,
// height: 25,
// marginRight: 10,
// },
welcomeText: {
fontSize: 18,
fontWeight: 'bold',
color: '#4600f1',
},
cardContainer: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
paddingHorizontal: 20,
},
card: {
width: 300,
padding: 20,
borderRadius: 15,
shadowColor: '#ccc',
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
marginBottom: 20,
},
heading: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 10,
color: '#fff',
},
subheading: {
fontSize: 16,
color: '#fff',
lineHeight: 25,
},
});

export default HomeScreen;