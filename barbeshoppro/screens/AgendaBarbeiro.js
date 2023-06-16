import React,{useState,useEffect} from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableHighlight,
  Image,
  
} from "react-native";
// import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AgendaBarbeiro = () => {
  const navigation = useNavigation();
  const [dados,setDados] = useState(null);
  console.log(dados);
  useEffect(() => {
    const pegarDadosdoStorage = async () => {
      
    const user = await AsyncStorage.getItem('userData')
    .then((data) => {
      const parsedUser = JSON.parse(data)
      setDados(parsedUser)})
      .catch(error => console.error(error));
    }
    pegarDadosdoStorage()
  },[])

  return (
    <ScrollView>
      <View style={styles.agendaBarbeiro}
      contentContainerStyle={styles.agendaBarbeiroScrollViewContent}
    ></View>
      {/* <Text style={styles.nome}>Nome</Text> */}
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon-back.png")}
        />
      </Pressable>
      {/* <Image
        style={styles.agendaBarbeiroChild}
        contentFit="cover"
        source={require("../assets/rectangle-41.png")}
      /> */}
      <View style={[styles.agendaBarbeiroItem, styles.agendaBg]} />
      <View style={[styles.agendaBarbeiroInner, styles.agendaModal]} />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Image
        style={styles.agendaBarbeiroChild1}
        contentFit="cover"
        source={require("../assets/rectangle-41.png")}
      />
      {/* <Text style={styles.text}>{` `}</Text> */}
      {/* <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/bg.png")}
      /> */}
      {/* <View> */}
      <Text style={styles.confirmar}>Confirmar</Text>
      {/* </View> */}
      <Text style={[styles.corteNormal, styles.corteNormalTypo]}>
        Corte normal
      </Text>
      <Text style={[styles.corteRealizadoNa, styles.corteRealizadoNaText]}>
        Corte realizado na maquina
      </Text>
      <Text style={styles.cancelar}>Cancelar</Text>
      <Text
        style={[styles.data20042023Hora1500, styles.corteNormalTypo]}
      >{`Data: 20/04/2023 Hora:15:00 `}</Text>
      <Text style={[styles.r100030minContainer, styles.corteRealizadoNaText]}>
        <Text style={styles.r100030minContainer1}>
          <Text>
            <Text style={styles.r1000Typo}>
              <Text style={styles.r10001}>R$ 10,00 </Text>
            </Text>
          </Text>
          <Text>
            {/* <Text style={styles.r1000Typo}>
              <Text style={styles.text2}>  aaaaaaa     </Text>
            </Text> */}
            <Text style={styles.text2}>
              <Text style={styles.min1}>30min</Text>
            </Text>
          </Text>
        </Text>
      </Text>
      
      <View style={styles.rectangleView} />
      <Text style={[styles.barbershoppro, styles.agendamentosTypo]}>
        BarbershopPRO
      </Text>
     
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.barbeiroIcon}
        contentFit="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Text style={[styles.agenda, styles.agendaTypo]}>Agenda</Text>
      <Pressable
        style={[styles.perfil, styles.agendaPosition]}
        underlayColor="#979696"
        onPress={() => navigation.navigate("PerfilBarbeiro")}
      >
        <Text style={[styles.perfil1, styles.agendaTypo]}>Perfil</Text>
      </Pressable>
      <View style={[styles.agendamentos, styles.agendamentosText]}>
      <Text style={[styles.agendamentos, styles.agendamentosTypo]}>
        Agendamentos
      </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  agendaBarbeiroScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 58,
    paddingVertical: 30,
    top: 15,
    backgroundColor: Color.goldenrod,
    
  },
  agendaBg: {
    backgroundColor: Color.goldenrod,
    position: "absolute",
  },
  agendaModal: {
    backgroundColor: Color.goldenrod,
    position: "absolute",
    left: 20,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center", 
  },
  corteNormalTypo: {
    alignItems: "center",
    fontFamily: FontFamily.interRegular,
    left: 32,
    height: 23,
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    display: "flex",
  },
  corteRealizadoNaText: {
    height: 24,
    left: 32,
    alignItems: "center",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    display: "flex",
  },
  agendamentosTypo: {
    height: 32,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    position: "absolute",
    alignItems: "flex-end",
    display: "flex",
  },
  agendamentosText: {
    height: 32,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 10,
      height: 10,
    },
    // textShadowColor: "rgba(0, 0, 0, 0.25)",
    // textAlign: "center",
    // color: Color.black,
    // fontFamily: FontFamily.interBold,
    // fontWeight: "700",
    // fontSize: FontSize.size_11xl,
    position: "absolute",
    // alignItems: "flex-end",
    // display: "flex",
  },
  agendaTypo: {
    fontFamily: FontFamily.interLightItalic,
    fontStyle: "italic",
    height: 32,
    fontWeight: "300",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.black,
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.size_xl,
  },
  agendaPosition: {
    top: 85,
    position: "absolute",
  },
  nome: {
    color: Color.darkgray,
    width: 90,
    height: 30,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  icon: {
    height: "100%",
    display: "none",
    width: "100%",
    backgroundColor: Color.black,//cor
  },
  wrapper: {
    width: 20,
    height: 20,
    zIndex: 1,
    marginTop: 4,
  },
  agendaBarbeiroChild: {
    width: 244,
    height: 48,
    zIndex: 2,
    borderRadius: Border.br_8xs,
    marginTop: 4,
  },
  agendaBarbeiroItem: {
    top: 35,
    left: 0,
    width: 400,
    height: 81,
    minHeight: 81,
    maxWidth: 400,
    maxHeight: 81,
    zIndex: 3,
    minWidth: 360,
  },
  agendaBarbeiroInner: {
    top: 186,
    left: 9,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 341,
    height: 136,
    minWidth: 341,
    minHeight: 124,
    maxWidth: 341,
    maxHeight: 124,
    zIndex: 4,
    borderRadius: Border.br_8xs,
  },
  rectangleIcon: {
    top: 238,
    zIndex: 5,
    height: 36,
    width: 92,
    borderRadius: Border.br_22xl,
    left: 252,
    position: "absolute",
  },
  agendaBarbeiroChild1: {
    zIndex: 6,
    top: 193,
    height: 36,
    width: 92,
    borderRadius: Border.br_22xl,
    left: 252,
    position: "absolute",
  },
  text: {
    width: 181,
    height: 37,
    zIndex: 7,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    marginTop: 4,
    alignItems: "flex-end",
    display: "flex",
  },
  bgIcon: {
    width: 390,
    height: 800,
    zIndex: 8,
    display: "none",
    marginTop: 4,
  },
  confirmar: {
    zIndex: 9,
    height: 23,
    width: 87,
    fontSize: FontSize.size_mini,
    left: 256,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.black,
    top: 193,
    position: "absolute",
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  corteNormal: {
    top: 196,
    left: 30,
    width: 109,
    zIndex: 10,
  },
  corteRealizadoNa: {
    top: 235,
    width: 208,
    zIndex: 11,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: 22,
    height: 24,
    fontSize: FontSize.size_mini,
  },
  cancelar: {
    top: 241,
    zIndex: 12,
    width: 87,
    left: 256,
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.black,
    position: "absolute",
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  data20042023Hora1500: {
    top: 272,
    width: 299,
    zIndex: 13,
  },
  r10001: {
    fontSize: FontSize.size_mini,
    top: 50,
    paddingTop: 50,
    marginTop: 50,

  },
  r1000Typo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    top: 50,
    paddingTop: 50,
    marginTop: 50,

  },
  text2: {
    fontSize: FontSize.size_3xs,
    marginTop: 50,
  },
  min1: {
    fontWeight: "200",
    fontFamily: FontFamily.interExtralight,
  },
  r100030minContainer1: {
    lineBreak: "anywhere",
    width: 100,
    // height: 100,
    paddingLeft: 50,
  },
  r100030minContainer: {
    top: 195,
    marginLeft: 117,
    // whiteSpace: "pre-wrap",
    width: 96,
    height: 100,
    zIndex: 14,
    // backgroundColor:Color.black,

  },
  rectangleView: {
    backgroundColor: Color.gainsboro,
    width: 226,
    height: 62,
    zIndex: 15,
    display: "none",
    marginTop: 4,
  },
  barbershoppro: {
    top: 36,
    left: 6,
    width: 261,
    zIndex: 16,
  },
  ellipseIcon: {
    top: 39,
    left: 298,
    width: 56,
    height: 56,
    zIndex: 17,
    position: "absolute",
  },
  barbeiroIcon: {
    top: 48,
    left: 301,
    width: 50,
    height: 38,
    zIndex: 18,
    position: "absolute",
  },
  agenda: {
    left: 7,
    width: 78,
    zIndex: 19,
    top: 84,
    position: "absolute",
  },
  perfil1: {
    width: 53,
  },
  perfil: {
    left: 85,
    zIndex: 20,
  },
  agendamentos: {
    top: 59,
    left: 41,
    width: 237,
    zIndex: 21,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: Color.black,

  },
  agendaBarbeiro: {
    backgroundColor: Color.darkgray,
    flex: 1,
    overflow: "hidden",
    minHeight: 800,
    // maxWidth: 360,
    maxHeight: 800,
    minWidth: 360,
    // width: 100,
    
    
  },
});

export default AgendaBarbeiro;
