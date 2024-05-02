import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Start from './pages/Start';
import Demo from './pages/Demo';
import CardDeck from './pages/CardDeck';

function StartScreen() {
  return (
    <Start />
  );
}

function DemoScreen() {
  return (
    <Demo />
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Deck" component={CardDeck} />
      <Tab.Screen name="Demo" component={DemoScreen} />
      <Tab.Screen name="Start Screen" component={StartScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
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
