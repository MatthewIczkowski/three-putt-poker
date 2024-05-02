import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';

const CardImage = require('../assets/face-down-card.png');

var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck()
{
	let deck = new Array();

	for(let i = 0; i < suits.length; i++)
	{
		for(let x = 0; x < values.length; x++)
		{
			let card = {Value: values[x], Suit: suits[i]};
      console.log(card)
			deck.push(card);
		}
	}

  console.log('number of cards: ' + deck.length);

	return deck;
}

function shuffle(deck)
{
	// for 1000 turns
	// switch the values of two random cards
	for (let i = 0; i < 1000; i++)
	{
		let location1 = Math.floor((Math.random() * deck.length));
		let location2 = Math.floor((Math.random() * deck.length));
		let tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}

var deck1 = shuffle(getDeck());


export default function CardDeck() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#016040', alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>3 Putt Poker</Text>
      <View  style={[styles.buttonContainer, { borderWidth: 3, borderColor: "#ffd33d", borderRadius: 18 }]}>
            <Pressable style={styles.button} onPress={() => getDeck()}>
            <Text style={styles.buttonLabel}>getDeck()</Text>
            </Pressable>
          </View>
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

