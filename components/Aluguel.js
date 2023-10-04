import { Image, View, StyleSheet, FlatList, Text, ImageBackground } from 'react-native';

import centro from '../assets/casas_aluguel/Centro.png';
import saomatheus from '../assets/casas_aluguel/SaoMatheus.png';
import jdbelavista from '../assets/casas_aluguel/JdBelaVista.png';
import condmoncoes from '../assets/casas_aluguel/CondMoncoes.png';
import fundo from '../assets/fundo.png';

export default function Aluguel() {
  return (
    <View style={{ flex: 1 }}>
    <ImageBackground source={fundo} style={estilos.fundo}>
      <View style={estilos.logoContainer}>
        <Image style={estilos.logo}
          source={require("../assets/Logo.png")}
        />
      </View>
      <FlatList
        style={estilos.flatList}
        data={[
          {
            nome: 'Centro',
            descricao: 'Sala comercial',
            preco: 'R$850,00',
            conteudo: '1 banheiro',
            imagem: centro,
          },
          {
            nome: 'São Matheus',
            descricao: 'Casa em Condomínio',
            preco: 'R$2.000,00',
            conteudo: '3 dormitórios - 2 banheiros',
            imagem: saomatheus,
          },
          {
            nome: 'Jd Bela Vista',
            descricao: 'Casa mobiliada',
            preco: 'R$3.000,00',
            conteudo: '3 dormitórios - 3 banheiros',
            imagem: jdbelavista,
          },
          {
            nome: 'Cond Monções',
            descricao: 'Casa em Condomínio',
            preco: 'R$4.000,00',
            conteudo: '3 dormitórios - 2 banheiros',
            imagem: condmoncoes,
          }
        ]}
        renderItem={({ item }) => (
          <View style={estilos.itemContainer}>
            <Image style={estilos.imagem} source={item.imagem} />
            <View style={estilos.textContainer}>
              <Text style={estilos.nome}>{item.nome}</Text>
              <Text style={estilos.descricao}>{item.descricao}</Text>
              <Text style={estilos.preco}>{item.preco}</Text>
              <Text style={estilos.conteudo}>{item.conteudo}</Text>  
            </View>          
          </View>
        )}
        keyExtractor={(item) => item.nome}
      />
    </ImageBackground>
    </View>
  );
}

const estilos = StyleSheet.create({
  flatList: {
    justifyContent: 'flex-start',
  },
  textContainer: {
  flexDirection: 'column',
  marginLeft: 20,
  },
  itemContainer: {
    flexDirection: "row",
    borderBottomWidth: 1, borderTopWidth: 1,
    borderLeftWidth: 1, borderRightWidth: 1,
    borderBottomColor: 'white', borderTopColor: 'white',
    borderLeftColor: 'white', borderRightColor: 'white',
    margin: 6,
    alignItems: "center"
  },
  imagem: {
    width: 135,
    height: 110,
  },
  nome: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  descricao: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
  },
  preco: {
    fontSize: 10,
    lineHeight: 26,
    textAlign: 'center',
    color: "white",
  },
  conteudo: {
    fontSize: 10,
    lineHeight: 15,
    textAlign: 'center',
    color: "white",
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 222,
    height: 97,
    marginTop: 70,
  },
  fundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  }
});