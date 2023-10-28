import { Image, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';

import montroyal from '../../../assets/casas_compra/MontRoyal.png';
import altosavecuia from '../../../assets/casas_compra/AltosAvecuia.png';
import villageamerica from '../../../assets/casas_compra/VillageAmerica.png';
import jardimexcelsior from '../../../assets/casas_compra/JardimExcelsior.png';

export default function Compra({ navigation }) {
  const data = [
    {
      key: 'montroyal',
      nome: 'Mont Royal',
      descricao: 'Apartamento',
      preco: 'R$135.000,00',
      conteudo: '1 dormitório - 1 banheiro',
      imagem: montroyal,
    },
    {
      key: 'altosavecuia',
      nome: 'Altos do Avecuia',
      descricao: 'Apartamento na planta',
      preco: 'R$169.990,00',
      conteudo: '2 dormitórios - 1 banheiro',
      imagem: altosavecuia,
    },
    {
      key: 'villageamerica',
      nome: 'Village América',
      descricao: 'Casa em Condomínio',
      preco: 'R$295.000,00',
      conteudo: '2 dormitórios - 2 banheiros',
      imagem: villageamerica,
    },
    {
      key: 'jardimexcelsior',
      nome: 'Jardim Excelsior',
      descricao: 'Sobrado',
      preco: 'R$320.000,00',
      conteudo: '2 dormitórios - 2 banheiros',
      imagem: jardimexcelsior,
    }
  ];

  return (
    <View style={estilos.fundo}>
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
    </View>
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
    margin: 6
  },
  imagem: {
    width: 135,
    height: 110
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
    marginBottom: 20
  },
  logo: {
    width: 222,
    height: 97,
    marginTop: 70
  },
  fundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    backgroundColor: '#1C1C1C'
  },
});