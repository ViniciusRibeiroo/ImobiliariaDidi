import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import fundo from '../../../assets/fundo.png';

export default function InfoCompra({ route }) {
  return(
    <ImageBackground source={fundo} style={estilos.fundo}>
      <View style={{ flex: 1, marginTop: 20 }}>
          <Text style={estilos.nome}>{route.params?.nome}</Text>
          <Text style={estilos.descricao}>{route.params?.descricao}</Text>
          <Text style={estilos.preco}>{route.params?.preco}</Text>
          <Text style={estilos.conteudo}>{route.params?.conteudo}</Text>
      </View>
    </ImageBackground>
  )
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  nome: {
    fontSize: 23,
    lineHeight: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  descricao: {
    fontSize: 15,
    lineHeight: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },
  preco: {
    fontSize: 15,
    lineHeight: 31,
    textAlign: 'center',
    color: "white",
  },
  conteudo: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    color: "white",
  },
});