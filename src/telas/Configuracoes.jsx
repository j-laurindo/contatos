import { StatusBar, View, StyleSheet } from 'react-native'
import { Cabecalho } from '../componentes/Cabecalho'

export function Configuracoes() {
  return (
    <>
    <Cabecalho titulo="Configuracoes" />
    <View style={estilos.conteiner}></View>
    </>
  );
}

const estilos = StyleSheet.create({
    conteiner: {
      flex: 1,
    },
  });
