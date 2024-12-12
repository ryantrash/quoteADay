import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

const QUOTES = [
  "PLACEHOLDER 1",
  "PLACEHOLDER 2",
  "PLACEHOLDER 3",
  "PLACEHOLDER 4",
  "PLACEHOLDER 5",
  "PLACEHOLDER 6 ",
  "PLACEHOLDER 7 ",
  "PLACEHOLDER 8 ",
  "PLACEHOLDER 9 ",
  "PLACEHOLDER 10",
  "PLACEHOLDER 11",
  "PLACEHOLDER 12",
  "PLACEHOLDER 13",
  "PLACEHOLDER 14",
  "PLACEHOLDER 15",
  "PLACEHOLDER 16",
  "PLACEHOLDER 17",
  "PLACEHOLDER 18",
  "PLACEHOLDER 19",
  "PLACEHOLDER 20",
  "PLACEHOLDER 21",
  "PLACEHOLDER 22",
  "PLACEHOLDER 23",
  "PLACEHOLDER 24",
  "PLACEHOLDER 25",
  "PLACEHOLDER 26",
  "PLACEHOLDER 27",
  "PLACEHOLDER 28",
  "PLACEHOLDER 29",
  "PLACEHOLDER 30",
  "PLACEHOLDER 31"
];

const App = () => {
  const text = QUOTES[new Date().getDate()-1] || "NONE FOUND";

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.quoteText}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  quoteText: {
    color: "white",
  },
});

export default App; 
