import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';

const CardImage = require('../assets/face-down-card.png');

export default function Demo() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#016040', alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>3 Putt Poker</Text>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={CardImage} style={styles.image} resizeMode='contain' />
          <Image source={CardImage} style={styles.image} resizeMode='contain' />
        </View>
        <Text style={{fontSize: 24, color: "#ffd33d"}}>Select Player</Text>
        <View style={{flexDirection: 'row', margin:'20px', gap: '20px'}}>
          <View  style={[styles.buttonContainer, { borderWidth: 3, borderColor: "#ffd33d", borderRadius: 18 }]}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
            <Text style={styles.buttonLabel}>Player 1</Text>
            </Pressable>
          </View>
          <View  style={[styles.buttonContainer, { borderWidth: 3, borderColor: "#ffd33d", borderRadius: 18 }]}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
            <Text style={styles.buttonLabel}>Player 2</Text>
            </Pressable>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: '20px', marginBottom: '20px'}}>
          <View  style={[styles.buttonContainer, { borderWidth: 3, borderColor: "#ffd33d", borderRadius: 18 }]}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
            <Text style={styles.buttonLabel}>Player 3</Text>
            </Pressable>
          </View>
          <View  style={[styles.buttonContainer, { borderWidth: 3, borderColor: "#ffd33d", borderRadius: 18 }]}>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
            <Text style={styles.buttonLabel}>Player 4</Text>
            </Pressable>
          </View>
        </View>
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
    justifyContent: 'flex-end',
  },
  imageContainer:{
    flex: 1,
    flexDirection: 'row', 
    margin:'10px', 
    gap: '5px',
    paddingTop: '40px',
  },
  image: {
    width: 200,
    height: 240,
  },
  buttonContainer: {
    width: 100,
    height: 50,
    marginHorizontal: 10,
    marginBottom: 10,
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

