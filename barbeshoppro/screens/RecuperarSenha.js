import * as React from "react";
import { Image, StyleSheet, Text,TextInput, Pressable, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const RecuperarSenha = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.recuperarSenha, styles.iconLayout]}>
      
      <Image
        style={styles.recuperarSenhaChild}
        resizeMode="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Text style={styles.recuperar}>Recuperar</Text>
      <Image
        style={styles.barbeiroIcon}
        resizeMode="cover"
        source={require("../assets/barbeiro.png")}
      />
      {/* <Image
        style={[styles.recuperarSenhaItem, styles.recuperarLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-15.png")}
      /> */}
      {/* <Text style={[styles.nome, styles.nomeTypo]}>Nome</Text> */}
      <Image
        style={[styles.recuperarSenhaInner, styles.recuperarLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      {/* <Text style={[styles.text, styles.textTypo]}>{` `}</Text> */}
      <Text style={[styles.recuperarSenha1, styles.textTypo]}>
        Recuperar senha
      </Text>
      {/* <Text style={[styles.digitarEmailCadastrado, styles.nomeTypo]}>
        Digitar email cadastrado
      </Text> */}
      <TextInput
        style={[styles.digitarEmailCadastrado, styles.nomeTypo]}
        placeholder="Digitar email cadastrado"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#979494"
      />
      <Pressable
        style={styles.iconChevronLeft}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icon-back.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  recuperarLayout: {
    width: 244,
    borderRadius: Border.br_8xs,
    height: 48,
    position: "absolute",
    top:370,
    marginLeft: 15
    
  },
  nomeTypo: {
    height: 30,
    color: Color.black,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
    
  },
  textTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
      alignItems: 'center',
    justifyContent: 'center',
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    position: "absolute",
    justifyContent: 'center',
  },
  bgIcon: {
    top: -9,
    left: 5,
    width: 390,
    display: "none",
    position: "absolute",
    height: 800,
  },
  recuperarSenhaChild: {
    top: 459,
    left: 138,
    borderRadius: Border.br_22xl,
    width: 126,
    height: 48,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
  },
  recuperar: {
    top: 469,
    left: 150,
    width: 107,
    height: 27,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
    
  },
  barbeiroIcon: {
    marginLeft: -118,
    top: 78,
    left: "50%",
    width: 236,
    height: 180,
    position: "absolute",
    backgroundColor: Color.darkgray,
    // tintColor: Color.darkgray,
  },
  recuperarSenhaItem: {
    top: 370,
    left: 67,
  },
  nome: {
    top: 379,
    left: 59,
    width: 90,
  },
  recuperarSenhaInner: {
    top: 393,
    left: 58,
  },
  digitarEmailCadastrado: {
    top: 378,
    left: 65,
    width: 256,
  },
  text: {
    top: 302,
    left: 80,
    width: 181,
    height: 37,
    
  },
  recuperarSenha1: {
    top: 295,
    left: 54,
    width: 261,
    height: 32,
    paddingLeft: 15
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconChevronLeft: {
    left: "3.61%",
    top: "5%",
    right: "90.53%",
    bottom: "94.87%",
    width: "5.86%",
    height: "3.75%",
    position: "absolute",
  },
  recuperarSenha: {
    backgroundColor: Color.darkgray,
    flex: 1,
    height: 800,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default RecuperarSenha;
