import React from 'react';
import { View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Text, Card, Provider as PaperProvider } from 'react-native-paper';

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

const QuoteADayApp = () => {
  const quote = QUOTES[new Date().getDate() - 1] || "NONE FOUND";

  return (
    <PaperProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Card style={styles.quoteContainer}>
            <Card.Content>
              <Text style={styles.quoteText}>{quote}</Text>
            </Card.Content>
          </Card>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAF3E0',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quoteContainer: {
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 15,
    backgroundColor: '#DAB894',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  quoteText: {
    fontSize: 24,
    color: '#3E2723',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 32,
  },
});

export default QuoteADayApp;
