import React,{useState,useEffect} from "react";
import { Image, StyleSheet, View, Text,TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PerfilBarbeiro = ({}) => {
  const navigation = useNavigation();
  const [dados,setDados] = useState([]); 
  const [name,setName] = useState([]); 
  const [email,setEmail] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const pegarDadosdoStorage = async () => {
      
        const user = await AsyncStorage.getItem('userData')
        .then((data) => {
          const parsedUser = JSON.parse(data)
          setDados(parsedUser)})
          .catch(error => console.error(error));
        }
        pegarDadosdoStorage()

    }, []);


  return (
    
    <View style={styles.perfilBarbeiro}>
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../assets/bg.png")}
      />
      <View style={[styles.perfilBarbeiroChild, styles.perfilChildBg]} />
      <Text style={[styles.seuPerfil, styles.seuPerfilText]}>Seu perfil</Text>
      <Text style={[styles.barberShopPro, styles.seuPerfilText]}>
        BarbershopPRO
      </Text>
      <Pressable
        style={[styles.agenda, styles.agendaPosition]}
        onPress={() => navigation.navigate("AgendaBarbeiro")}
      >
        <Text style={[styles.agenda1, styles.perfilTypo]}>Agenda</Text>
      </Pressable>
      <Text style={[styles.perfil, styles.perfilTypo]}>Perfil</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/arrow-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.perfilBarbeiroInner, styles.ellipseIconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.barbeiroIcon, styles.barbeiroIconLayout]}
        resizeMode="cover"
        source={require("../assets/barbeiro.png")}
      />
      <View style={styles.rectangleView} />
      <View style={[styles.perfilBarbeiroChild1, styles.perfilChildBg]} />
      <Text style={[styles.barbeiroX, styles.barbeiroXPosition]}>
        {dados?.nome}
      </Text>
      <Text style={[styles.ruaPapaJoo, styles.ruaPapaJooTypo]}>
        {dados?.endereco}
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.barbeiroXPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.barbeiroIcon1, styles.barbeiroIconLayout]}
        resizeMode="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
       <Pressable
        style={styles.editarPerfilPosition}
        underlayColor="#979696"
        onPress={() => navigation.navigate("EditarDadosPerfil")}
        >
      <Text style={[styles.editarPerfil, styles.ruaPapaJooTypo]}>
        Editar perfil
      </Text>
      
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  perfilChildBg: {
    backgroundColor: Color.goldenrod,
    position: "absolute",
  },
  nomeTypo: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  seuPerfilText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.black,
    textAlign: "left",
    alignItems: "flex-end",
    display: "flex",
  },
  agendaPosition: {
    top: 85,
    position: "absolute",
  },
  editarPerfilPosition: {
    top: 2,
    // position: "absolute",
  },
  perfilTypo: {
    fontFamily: FontFamily.interLightItalic,
    fontWeight: "300",
    fontStyle: "italic",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 32,
    textAlign: "left",
    color: Color.black,
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.size_xl,
  },
  ellipseIconLayout: {
    height: 56,
    width: 56,
    top: 39,
  },
  barbeiroIconLayout: {
    height: 38,
    width: 50,
    left: "50%",
    position: "absolute",
  },
  barbeiroXPosition: {
    top: 191,
    position: "absolute",
  },
  ruaPapaJooTypo: {
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.black,
    alignItems: "flex-end",
    display: "flex",
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
  perfilBarbeiroChild: {
    top: 35,
    left: 0,
    width: 400,
    height: 81,
  },
  perfilBarbeiroItem: {
    top: 105,
    left: 62,
    borderRadius: Border.br_8xs,
    width: 244,
    height: 48,
    position: "absolute",
  },
  nome: {
    top: 114,
    left: 54,
    color: Color.darkgray,
    width: 90,
    height: 30,
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    position: "absolute",
  },
  seuPerfil: {
    top: 112,
    left: 103,
    width: 154,
    height: 32,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.black,
    position: "absolute",
  },
  barberShopPro: {
    top: 35,
    left: 13,
    width: 261,
    height: 32,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.black,
    position: "absolute",
  },
  agenda1: {
    width: 78,
  },
  agenda: {
    left: 7,
    width: 78,
    zIndex: 19,
    top: 84,
    position: "absolute",
  },
  perfil: {
    left: 87,
    width: 53,
    top: 85,
    position: "absolute",
    // perfil: {
      // left: 85,
    zIndex: 20,
    // },
  },
  icon: {
    height: "100%",
    display: "none",
    width: "100%",
  },
  wrapper: {
    top: 30,
    width: 20,
    height: 20,
    left: 35,
    position: "absolute",
  },
  perfilBarbeiroInner: {
    top: 7,
    left: 286,
    position: "absolute",
  },
  barbeiroIcon: {
    top: 45,
    marginLeft: 95,
    width: 50,
    height: 38,
    zIndex: 18,
    position: "absolute",
  },
  rectangleView: {
    top: 384,
    left: 17,
    backgroundColor: Color.gainsboro,
    width: 226,
    height: 62,
    display: "none",
    position: "absolute",
  },
  perfilBarbeiroChild1: {
    top: 179,
    width: 316,
    height: 136,
    left: 26,
  },
  barbeiroX: {
    left: 112,
    fontFamily: FontFamily.interRegular,
    width: 149,
    height: 55,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.black,
    textAlign: "left",
    alignItems: "flex-end",
    display: "flex",
    top: 191,
    fontSize: FontSize.size_xl,
  },
  ruaPapaJoo: {
    top: 246,
    fontWeight: "200",
    fontFamily: FontFamily.interExtralight,
    width: 299,
    left: 35,
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  ellipseIcon: {
    height: 56,
    width: 56,
    left: 35,
  },
  barbeiroIcon1: {
    marginLeft: -157,
    top: 200,
  },
  rectangleIcon: {
    top: 336,
    left: 22,
    borderRadius: Border.br_22xl,
    width: 129,
    height: 43,
    position: "absolute",
  },
  editarPerfil: {
    top: 340,
    width: 125,
    height: 29,
    left: 26,
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  perfilBarbeiro: {
    backgroundColor: Color.darkgray,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
});

export default PerfilBarbeiro;
