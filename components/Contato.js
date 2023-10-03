import { Image, View, ImageBackground, StyleSheet } from 'react-native';

import fundo from '../assets/fundo.png';

export default function Contato () {
  return (
  <View style={{ flex: 1 }}>
  <ImageBackground source={fundo} style={estilos.fundo}>
    <Image
      style={estilos.logo}
      source={require("../assets/Logo.png")}
    />
  </ImageBackground>
  </View>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  logo: {
    width: 222,
    height: 97,
    marginTop: 20
  },
});