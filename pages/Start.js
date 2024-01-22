import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native';

const CardImage = require('../assets/playing-cards.png');

export default function Start() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>3 Putt Poker</Text>
      <View style={styles.imageContainer}>
        <Image source={CardImage} style={styles.image} resizeMode='contain' />
      </View>
      <View  style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
        <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
         <Text style={styles.buttonLabel}>Start Game</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#016040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  buttonContainer: {
    width: 200,
    height: 68,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
