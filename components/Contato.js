import { Image, View } from 'react-native';

export default function Contato () {
  return (
  <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
    <Image
      style={{width: 222, height: 97, marginBottom: 10 }}
      source={require("../assets/Logo_didi.png")}
    />
  </View>
  );
}