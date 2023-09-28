import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Salve meu chapa deu bom o git aí?
      </Text>
        <Image
        style={{width: 300, height: 300, margin: 10}}
        source={{uri: 'https://app.globoesporte.globo.com/futebol/copa-do-brasil/uma-taca-dificil-de-levar-pra-casa/assets/images/taca-360-768/taca_360_01.jpg',}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
