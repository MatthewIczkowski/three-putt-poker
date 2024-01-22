import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';

export default function Demo() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>3 Putt Poker</Text>
      <Text style={{fontSize: 24, color: "#ffd33d"}}>Select Player</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button
          title="Player 1"
          onPress={() => alert('You pressed a button.')}
        />
        <Button
          title="Player 2"
          onPress={() => alert('You pressed a button.')}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button
          title="Player 3"
          onPress={() => alert('You pressed a button.')}
        />
        <Button
          title="Player 4"
          onPress={() => alert('You pressed a button.')}
        />
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

