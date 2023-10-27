import { Image, View, FlatList, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';

import centro from '../../../assets/casas_aluguel/Centro.png';
import saomatheus from '../../../assets/casas_aluguel/SaoMatheus.png';
import jdbelavista from '../../../assets/casas_aluguel/JdBelaVista.png';
import condmoncoes from '../../../assets/casas_aluguel/CondMoncoes.png';
import fundo from '../../../assets/fundo.png';

export default function Compra({ navigation }) {
  const data = [
    {
      key: 'centro',
      nome: 'Centro',
      descricao: 'Sala comercial',
      preco: 'R$850,00',
      conteudo: '1 banheiro',
      imagem: centro,
    },
    {
      key: 'saomatheus',
      nome: 'São Matheus',
      descricao: 'Casa em Condomínio',
      preco: 'R$2.000,00',
      conteudo: '3 dormitórios - 2 banheiros',
      imagem: saomatheus,
    },
    {
      key: 'jdbelavista',
      nome: 'Jd Bela Vista',
      descricao: 'Casa mobiliada',
      preco: 'R$3.000,00',
      conteudo: '3 dormitórios - 3 banheiros',
      imagem: jdbelavista,
    },
    {
      key: 'condmoncoes',
      nome: 'Cond Monções',
      descricao: 'Casa em Condomínio',
      preco: 'R$4.000,00',
      conteudo: '3 dormitórios - 2 banheiros',
      imagem: condmoncoes,
    }
  ];

  return (
    <ImageBackground source={fundo} style={estilos.fundo}>
      <View style={estilos.logoContainer}>
        <Image style={estilos.logo} source={require("../../../assets/Logo.png")} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Informações', item)}>
            <View style={estilos.itemContainer}>
              <Image style={estilos.imagem} source={item.imagem} />
              <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={estilos.nome}>{item.nome}</Text>
                <Text style={estilos.descricao}>Clique para maiores informações</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    paddingEnd: 16,
    borderRadius: 5,
    borderColor: 'white',
    margin: 6,
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
    marginLeft: 20
  },
  descricao: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
    marginLeft: 20
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
    width: '100%',
  },
});