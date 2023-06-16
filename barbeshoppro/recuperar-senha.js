import * as React from 'react';
//import {Text,Image,View,ScrollView,StyleSheet} from "react-native";
import { TouchableOpacity,View, Text, Image, StyleSheet,TextInput,useNavigation,Button , Dimensions } from 'react-native';

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'rgba(151, 149, 149, 1)',
alignItems: 'center',
justifyContent: 'center',
},
barbeiroImage: {
position: 'absolute',
left: 62,
top: 74,
borderRadius: null,
width: 236,
height: 180,
backgroundColor: '#979494',
// opacity: 0.5,
// mixBlendMode: 'darken',
},
loginText: {
position: 'absolute',
left: 90,
top: 354,
width: 183,
color: 'rgba(0, 0, 0, 1)',
fontSize: 30,
fontFamily: 'Inter_700',
letterSpacing: 0,
fontStyle: 'normal',
textAlign: 'center',
},
bemVindoText: {
position: 'absolute',
left: 44,
top: 274,
width: 275,
color: 'rgba(0, 0, 0, 1)',
fontSize: 50,
fontFamily: 'Neonderthaw',
letterSpacing: 0,
fontStyle: 'normal',
textAlign: 'center',
},
senhaText: {
position: 'absolute',
left: 90,
top: 471,
width: 183,
color: 'rgba(0, 0, 0, 1)',
fontSize: 30,
fontFamily: 'Inter_700',
letterSpacing: 0,
fontStyle: 'normal',
textAlign: 'center',
},
esqueceuSenhaText: {
    color: '#000',
    fontSize: 20,
    // fontFamily: 'Inter_600',
    letterSpacing: 0,
    fontStyle: 'normal',
    textAlign: 'center',
  },

  esqueceuSenhaView: {
    position: 'absolute',
    left: 69,
    top: 654,
    width: 223,
    height: 26,
  },
  aindaNaoTemContaView: {
    position: 'absolute',
    left: 69,
    top: 694,
    width: 223,
    height: 26,
  },
  aindaNaoTemContaText: {
    color: '#000',
    fontSize: 20,
    // fontFamily: 'Inter_600',
    letterSpacing: 0,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  entrarText: {
    position: 'absolute',
    left: 147,
    top: 599,
    width: 69,
    color: '#000',
    fontSize: 20,
    // fontFamily: 'Inter_600',
    letterSpacing: 0,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  aindaNaoTemContaCopy1: {
    color: '#000',
    fontSize: 20,
    // fontFamily: 'Inter_600',
    letterSpacing: 0,
    fontStyle: 'normal',
    textAlign: 'center',
  },
  aindaNaoTemConta: {
    position: 'absolute',
    left: 69,
    top: 694,
    width: 223,
    height: 26,
  },

Input:{
position: 'absolute',
width: 244,
height: 48,
left: 58,
top: 400,
backgroundColor: '#D9D9D9',
borderRadius: 5,
borderSolid: 2,
},

inputLogin:{
position: 'absolute',
width: 244,
height: 48,
left: 58,
top: 400,
backgroundColor: '#D9D9D9',
borderRadius: 5,
borderSolid: 2,
padding: 10,
align: 'center',
textAlign: 'center',
textAlignVertical: 'center'
},
inputSenha:{
position: 'absolute',
width: 244,
height: 48,
left: 58.5,
top: 518,
backgroundColor: '#D9D9D9',
borderRadius: 5,
borderSolid: 2,
padding: 10,
align: 'center',
textAlign: 'center',
textAlignVertical: 'center'
},

button:{
  position: 'absolute',
  width: 244,
  height: 48,
  left: 58.5,
  top: 589,
  backgroundColor: '#DAA520',
  borderRadius: 41,
  alignItems: 'center',
  justifyContent: 'center'
},

  buttonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 20,
    // lineHeight: 24,
    // display: 'flex',
    alignItems: 'center',
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical : 'center',
  
  },
});
const HomeScreen = () => {
  const navigation = useNavigation();

  const goToOtherScreen = () => {
    navigation.navigate('OtherScreen');
  };
  return (
    <TouchableOpacity onPress={goToOtherScreen}>
      <Text>Go to Other Screen</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
  <View style={styles.container}>
      <Image
      style={styles.barbeiroImage}
      source={require('./assets/barbeiro.png' )}
      />
    <Text style={styles.bemVindoText}>Bem vindo</Text>
    <Text style={styles.loginText}>Login</Text>
    <View style={styles.inputLogin}>
        <TextInput></TextInput>
    </View>
    <Text style={styles.senhaText}>Senha</Text>
    <View style={styles.inputSenha}>
        <TextInput></TextInput>
    </View>
    <TouchableOpacity  style={styles.button}>
    <Text style={styles.buttonText}>Entrar</Text>
   </TouchableOpacity >
 
    <View style={styles.esqueceuSenhaView}>
      <Text style={styles.esqueceuSenhaText}>Esqueceu a senha?</Text>
    </View>
    <View style={styles.aindaNaoTemContaView}>
      <Text style={styles.aindaNaoTemContaText}>Ainda não tem conta?</Text>
    </View>
  </View>
)
}

