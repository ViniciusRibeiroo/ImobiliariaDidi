import { Image, ScrollView, View, StyleSheet, FlatList, Text, ImageBackground } from 'react-native';

import montroyal from '../assets/casas_compra/MontRoyal.png';
import altosavecuia from '../assets/casas_compra/AltosAvecuia.png';
import villageamerica from '../assets/casas_compra/VillageAmerica.png';
import jardimexcelsior from '../assets/casas_compra/JardimExcelsior.png';
import fundo from '../assets/fundo.png';

export default function Compra() {
  return (
    <ScrollView style={{ flex: 1, marginTop: 26 }}>
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
            nome: 'Mont Royal',
            descricao: 'Apartamento',
            preco: 'R$135.000,00',
            conteudo: '1 dormitório - 1 banheiro',
            imagem: montroyal,
          },
          {
            nome: 'Altos do Avecuia',
            descricao: 'Apartamento na planta',
            preco: 'R$169.990,00',
            conteudo: '2 dormitórios - 1 banheiro',
            imagem: altosavecuia,
          },
          {
            nome: 'Village América',
            descricao: 'Casa em Condomínio',
            preco: 'R$295.000,00',
            conteudo: '2 dormitórios - 2 banheiros',
            imagem: villageamerica,
          },
          {
            nome: 'Jardim Excelsior',
            descricao: 'Sobrado',
            preco: 'R$320.000,00',
            conteudo: '2 dormitórios - 2 banheiros',
            imagem: jardimexcelsior,
          },
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
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  flatList: {
    justifyContent: 'flex-start',
  },
  textContainer: {
  flexDirection: 'column',
  marginLeft: 20,
  marginRight: 20
  },
  itemContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: 'white',
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
    marginBottom: 20,
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