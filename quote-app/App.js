import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions, TouchableHighlight, } from 'react-native';
import { Text, Provider as PaperProvider } from 'react-native-paper';
import quote from './data'

const App = () => {
  const [quoteText, setText] = useState(quote.content + "\n" + quote.author);
  function handleClick() {
    if(quoteText == quote.content + "\n" + quote.author){
      setText(quote.desc);
    } else {
      setText(quote.content + "\n" + quote.author);
    }
  }
  return (
    // TODO: Find out how to make flashcard
    <PaperProvider>
      <SafeAreaView style={styles.safeArea}>
        
        <View style={styles.container}>
        <Text style={styles.titleText}>Quote-A-Day</Text>
        <Text style={styles.dateText}>{}</Text>
          <TouchableHighlight onPress={handleClick} style={styles.quoteContainer}>
          <Text style={styles.quoteText}>{quoteText}</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAF3E0',
    borderWidth: 5, 
    borderColor: '#6F4F28', 
    padding: 5, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  quoteContainer: {
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 15,
    backgroundColor: '#DAB894',
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  titleText: {
    color: 'black',
    fontSize:48,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 32,
  },
  quoteText: {
    fontSize: 36,
    color: '#3E2723',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 36,
  },
});

export default App;