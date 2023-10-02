import { Image, View, StyleSheet, FlatList, Text } from 'react-native';

import montroyal from '../assets/casas_compra/MontRoyal.png';
import altosavecuia from '../assets/casas_compra/AltosAvecuia.png';
import villageamerica from '../assets/casas_compra/VillageAmerica.png';
import jardimexcelsior from '../assets/casas_compra/JardimExcelsior.png';

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
            nome: 'Mont Royal',
            imagem: montroyal,
          },
          {
            nome: "Altos de Avecuia",
            imagem: altosavecuia,
          },
          {
            nome: "Village América",
            imagem: villageamerica,
          },
          {
            nome: "Jardim Excelsior",
            imagem: jardimexcelsior,
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
