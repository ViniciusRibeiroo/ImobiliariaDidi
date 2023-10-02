import { Image, View, StyleSheet, FlatList, Text } from 'react-native';

import centro from '../assets/casas_aluguel/Centro.png';
import saomatheus from '../assets/casas_aluguel/SaoMatheus.png';
import jdbelavista from '../assets/casas_aluguel/JdBelaVista.png';
import condmoncoes from '../assets/casas_aluguel/CondMoncoes.png';

export default function Compra() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={estilos.logoContainer}>
        <Image style={estilos.logo}
          source={require("../assets/Logo_didi.png")}
        />
      </View>
      <FlatList
        style={estilos.flatList}
        data={[
          {
            nome: 'Centro',
            imagem: centro,
          },
          {
            nome: "São Matheus",
            imagem: saomatheus,
          },
          {
            nome: "Jd Bela Vista",
            imagem: jdbelavista,
          },
          {
            nome: "Cond Monções",
            imagem: condmoncoes,
          }
        ]}
        renderItem={({ item }) => (
          <View style={estilos.itemContainer}>
            <Image style={estilos.imagem} source={item.imagem} />
            <Text style={estilos.nome}>{item.nome}</Text>            
          </View>
        )}
        keyExtractor={(item) => item.nome}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  flatList: {
    justifyContent: 'flex-start',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 222,
    height: 97,
  }
});
