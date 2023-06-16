import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Cadastro = () => {
  const navigation = useNavigation();

  return (
   
    <View style={[styles.cadastro, styles.iconLayout]}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />
       <View style={styles.barbeiroView}>
        <Image
          style={styles.barbeiroIcon}
          resizeMode="cover"
          source={require("../assets/barbeiro.png")}
          />
       </View>

      <Image
        style={[styles.cadastroChild, styles.cadastroLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-42.png")}
      />
      <Pressable
        style={styles.barbeiro}
        onPress={() => navigation.navigate("CadastroBarbeiro")}
      >
        <Text style={styles.barbeiro1}>Barbeiro</Text>
      </Pressable>
      <Image
        style={[styles.cadastroItem, styles.cadastroLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-42.png")}
      />
      {/* <Image
        style={styles.barbeiroIcon}
        resizeMode="cover"
        source={require("../assets/barbeiro2.png")}
      /> */}
      <Text style={[styles.cadastro1, styles.cadastro1Typo]}>Cadastro</Text>
      <Text style={[styles.vocQuerSe, styles.cadastro1Typo]}>
       Como deseja se cadastrar?
      </Text>
      <Pressable
        style={styles.cliente}
        onPress={() => navigation.navigate("CadastroCliente")}
      >
        <Text style={styles.barbeiro1}>Cliente</Text>
      </Pressable>
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
  cadastroLayout: {
    height: 48,
    width: 128,
    borderRadius: Border.br_22xl,
    left: 135,
    position: "absolute",
    
  },
  cadastro1Typo: {
    textShadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    textShadowOffset: {
      width: 0,
      height: 4,
    alignItems: 'center',
    justifyContent: 'center',
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 37,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  bgIcon: {
    top: -9,
    left: 5,
    width: 390,
    display: "none",
    position: "absolute",
    height: 800,
  },
  cadastroChild: {
    top: 400,
  },
  barbeiro1: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    textAlign: "center",
    justifyContent: "center",
    width: 99,
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_xl,
    marginBottom: 15,
  },
  barbeiro: {
    left: 150,
    top: 412,
    position: "absolute",
  },
  cadastroItem: {
    top: 489,
  },
  barbeiroIcon: {
    marginLeft: -118,
    top: 76,
    left: "50%",
    width: 236,
    height: 180,
    position: "absolute",
  },
  cadastro1: {
    top: 286,
    left: 128,
    fontSize: FontSize.size_11xl,
    width: 181,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vocQuerSe: {
    top: 343,
    left: 70,
    width: 318,
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: FontSize.size_xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 37,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    
  },
  cliente: {
    left: 150,
    top: 501,
    position: "absolute",
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
  cadastro: {
    backgroundColor: Color.darkgray,
    flex: 1,
    height: 800,
  },
  barbeiroIcon: {
    width: 236,
    height: 180,
    marginTop: 28,
    // tintColor: Color.black,
    backgroundColor:'#979696'
  },
  barbeiroView: {
    // width: 236,
    // height: 180,
    marginTop: 15,
    backgroundColor: '#979494',
    Color: '#979494',
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: Color.black,

  },
});

export default Cadastro;
