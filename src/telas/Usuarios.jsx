import { StatusBar, View, StyleSheet } from 'react-native'
import { Cabecalho } from '../componentes/Cabecalho'

export function Usuarios() {
  return (
    <>
    <Cabecalho titulo="Usuarios" />
    <View style={estilos.conteiner}></View>
    </>
  );
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
    },
  });

