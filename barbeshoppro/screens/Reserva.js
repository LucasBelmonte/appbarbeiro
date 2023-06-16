import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
// import {  } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Reserva = () => {
  const navigation = useNavigation();
    const alertas =  () => {
      alert("Reseva efetuada com sucesso!");
      navigation.navigate("AgendaCliente");
    }
  return (
    <ScrollView
      style={[styles.reserva, styles.reservaLayout]}
      contentContainerStyle={styles.reservaScrollViewContent}
    >
      <View style={[styles.reservaChild, styles.reservaBg]} />
      <View style={[styles.reservaItem, styles.reservaBg]} />
      <Image
        style={[styles.reservaInner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.barbershoppro, styles.serviosText]}>
        BarbershopPRO
      </Text>
      <Image
        style={[styles.barbeiroIcon, styles.barbeiroIconLayout]}
        contentFit="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Pressable
        style={[styles.inicio, styles.inicioPosition]}
        onPress={() => navigation.navigate("InicioCliente")}
      >
        <Text style={[styles.inicio1, styles.inicio1Typo]}>Inicio</Text>
      </Pressable>
      <Pressable
        style={[styles.perfil, styles.inicioPosition]}
        onPress={() => navigation.navigate("PerfilCliente")}
      >
        <Text style={[styles.perfil1, styles.inicio1Typo]}>Perfil</Text>
      </Pressable>
      <Pressable
        style={[styles.agenda, styles.inicioPosition]}
        onPress={() => navigation.navigate("AgendaCliente")}
      >
        <Text style={[styles.agenda1, styles.inicio1Typo]}>Agenda</Text>
      </Pressable>
      {/* <Image
        style={[styles.rectangleIcon, styles.ruaPapaJooPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-15.png")}
      /> */}
      <Text style={styles.barbeiroX}>Barbeiro X</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <ImageBackground
        style={[styles.barbeiroIcon1, styles.barbeiroIconLayout]}
        resizeMode="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Text style={[styles.ruaPapaJoo, styles.min1Typo]}>
        Rua papa João XXIII, Nº 123 San martin,50920-000, Recife
      </Text>
      <Text style={[styles.servios, styles.serviosText]}>Serviços</Text>
      <View style={[styles.rectangleView, styles.reservaChildShadowBox]} />
      <Image
        style={[styles.reservaChild1, styles.reservaChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Text style={[styles.corteNormal, styles.degradTypo]}>Corte normal</Text>
      <Text
        style={[styles.r100030minContainer, styles.r100030minContainerText]}
      >
        <Text style={styles.r100030minContainer1}>
          <Text>
            <Text style={styles.r1000}>
              <Text style={styles.r10001}>R$ 10,00</Text>
            </Text>
          </Text>
          <Text>
            <Text style={styles.r1000}>
              <Text style={styles.text1}>{`           `}</Text>
            </Text>
            <Text style={styles.text1}>
              <Text style={styles.min1Typo}>30min</Text>
            </Text>
          </Text>
        </Text>
      </Text>
      <TouchableOpacity style={[styles.reservar, styles.reservarTypo]} onPress={alertas}>

      <Text style={styles.reservarText}>Reservar</Text>
      </TouchableOpacity>
      <Text style={[styles.corteRealizadoNa, styles.corteTypo]}>
        Corte realizado na maquina
      </Text>
      <View style={[styles.reservaChild2, styles.reservaChildShadowBox]} />
      <Image
        style={[styles.reservaChild3, styles.reservar1Position]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Text style={[styles.reservar1, styles.reservar1Position, styles.reservarTypo]}>Reservar</Text>
      <View style={[styles.reservaChild4, styles.reservaChildShadowBox]} />
      <Image
        style={[styles.reservaChild5, styles.reservar2Position]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Text
        style={[styles.r100030minContainer2, styles.r100030minContainerText]}
      >
        <Text style={styles.r100030minContainer1}>
          <Text>
            <Text style={styles.r1000}>
              <Text style={styles.r10001}>R$ 10,00</Text>
            </Text>
          </Text>
          <Text>
        
            <Text style={styles.text1}>
              <Text style={styles.min1Typo}>30min</Text>
            </Text>
          </Text>
        </Text>
      </Text>
      <TouchableOpacity style={[styles.reservar2, styles.reservarTypo]} onPress={alertas}>

{/* <Text style={styles.reservarText}>Reservar</Text> */}
      <Text style={[styles.reservar2, styles.reservar2Position, styles.reservarTypo]}>Reservar</Text>
</TouchableOpacity>
      <Text style={[styles.corteRealizadoNa1, styles.corteTypo]}>
        Corte realizado na maquina
      </Text>
      <Text style={[styles.degrad, styles.degradTypo]}>Degradê</Text>
      <Text style={[styles.r200030minContainer, styles.reservar1Position]}>
        <Text style={styles.r100030minContainer1}>
          <Text>
            <Text style={styles.r1000}>
              <Text style={styles.r10001}>R$ 20,00</Text>
            </Text>
          </Text>
          <Text>
            <Text style={styles.r1000}>
              <Text style={styles.text1}>{`           `}</Text>
            </Text>
            <Text style={styles.text1}>
              <Text style={styles.min1Typo}>30min</Text>
            </Text>
          </Text>
        </Text>
      </Text>
      <Text style={[styles.text7, styles.textTypo]}>{` `}</Text>
      <Text style={[styles.maquna0, styles.corteTypo]}>{`Maquína 0 `}</Text>
      <Text style={[styles.text8, styles.textTypo]}>{` `}</Text>
      <Text style={[styles.navalhado, styles.corteTypo]}>Navalhado</Text>
      <Image
        style={[styles.iconSearch, styles.reservaLayout]}
        contentFit="cover"
        source={require("../assets/-icon-search.png")}
      />
      <TextInput
        style={styles.buscarPorServios}
        placeholder="Buscar por serviços"
        keyboardType="default"
        placeholderTextColor="#979494"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  reservaScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 800,
    paddingVertical: 360,
  },
  reservaLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  reservaBg: {
    backgroundColor: Color.goldenrod,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 56,
    width: 56,
    position: "absolute",
  },
  serviosText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
  },
  barbeiroIconLayout: {
    height: 38,
    width: 50,
    position: "absolute",
  },
  inicioPosition: {
    top: 68,
    position: "absolute",
  },
  inicio1Typo: {
    fontFamily: FontFamily.interLightItalic,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 32,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
  },
  ruaPapaJooPosition: {
    top: 303,
    position: "absolute",
  },
  min1Typo: {
    fontFamily: FontFamily.interExtralight,
    fontWeight: "200",
  },
  reservaChildShadowBox: {
    height: 89,
    width: 341,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 8,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.goldenrod,
    position: "absolute",
  },
  reservaChildLayout: {
    height: 36,
    width: 92,
    borderRadius: Border.br_22xl,
    left: 250,
  },
  degradTypo: {
    
    height: 23,
    width: 109,
    alignItems: "center",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  r100030minContainerText: {
    height: 24,
    width: 66,
    whiteSpace: "pre-wrap",
    left: 164,
    alignItems: "center",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    display: "flex",
    textAlign: "left",
    color: Color.black,
  },
  textTypo: {
    height: 37,
    width: 181,
    left: 90,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    position: "absolute",
  },
  reservarTypo: {
    backgroundColor: Color.darkgray,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    maxHeight: 23,
    maxWidth: 87,
    minHeight: 23,
    minWidth: 87,
    width: 87,
    justifyContent: "center",
    textAlign: "center",
    left: 253,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    height: 23,
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
  },
  corteTypo: {
    width: 208,
    fontFamily: FontFamily.interLight,
    height: 24,
    alignItems: "center",
    fontSize: FontSize.size_mini,
    fontWeight: "300",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  reservar1Position: {
    
    top: 558,
    position: "absolute",
  },
  reservar2Position: {
    top: 661,
    position: "absolute",
  },
  reservaChild: {
    top: 30,
    left: 0,
    width: 400,
    height: 81,
    zIndex: 0,
  },
  reservaItem: {
    top: 216,
    width: 316,
    height: 136,
    zIndex: 1,
    borderRadius: Border.br_8xs,
    left: 22,
  },
  reservaInner: {
    top: 31,
    left: 288,
    zIndex: 2,
  },
  barbershoppro: {
    top: 27,
    left: 10,
    width: 261,
    zIndex: 3,
    height: 32,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  barbeiroIcon: {
    top: 37,
    left: 291,
    zIndex: 4,
  },
  inicio1: {
    width: 52,
  },
  inicio: {
    left: 5,
    zIndex: 5,
  },
  perfil1: {
    width: 53,
  },
  perfil: {
    left: 152,
    zIndex: 6,
  },
  agenda1: {
    width: 78,
  },
  agenda: {
    left: 66,
    zIndex: 7,
  },
  rectangleIcon: {
    left: 32,
    width: 297,
    height: 48,
    zIndex: 8,
    borderRadius: Border.br_8xs,
  },
  barbeiroX: {
    top: 226,
    left: 106,
    width: 99,
    height: 35,
    zIndex: 9,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  ellipseIcon: {
    top: 225,
    left: 31,
    zIndex: 10,
  },
  barbeiroIcon1: {
    top: 232,
    left: 34,
    zIndex: 11,
  },
  ruaPapaJoo: {
    left: 35,
    width: 299,
    zIndex: 12,
    fontSize: FontSize.size_mini,
    top: 303,
    position: "absolute",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontWeight: "200",
  },
  servios: {
    top: 375,
    left: 112,
    width: 140,
    zIndex: 13,
    height: 37,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  rectangleView: {
    top: 443,
    zIndex: 14,
  },
  reservaChild1: {
    zIndex: 15,
    top: 455,
    position: "absolute",
  },
  corteNormal: {
    zIndex: 16,
    top: 455,
    left: 22,
  },
  r10001: {
    fontSize: FontSize.size_mini,
  },
  r1000: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  text1: {
    fontSize: FontSize.size_3xs,
  },
  r100030minContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  r100030minContainer: {
    top: 457,
    zIndex: 17,
    position: "absolute",
  },
  text2: {
    top: 869,
    zIndex: 18,
  },
  reservar: {
    zIndex: 19,
    top: 455,
    position: "absolute",
    
  },
  reservarText: {
    zIndex: 20,
    // top: 0,
    right: 10,
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    fontFamily: FontFamily.interBold,

    // position: "absolute",
    
  },
  corteRealizadoNa: {
    top: 492,
    zIndex: 20,
    left: 21,
  },
  reservaChild2: {
    top: 546,
    zIndex: 21,
  },
  reservaChild3: {
    zIndex: 22,
    height: 36,
    width: 92,
    borderRadius: Border.br_22xl,
    left: 250,
  },
  reservar1: {
    zIndex: 23,
    maxHeight: 23,
    maxWidth: 87,
    minHeight: 23,
    minWidth: 87,
    width: 87,
    justifyContent: "center",
    textAlign: "center",
    left: 253,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    height: 23,
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
  },
  reservaChild4: {
    top: 649,
    zIndex: 24,
  },
  reservaChild5: {
    zIndex: 25,
    height: 36,
    width: 92,
    borderRadius: Border.br_22xl,
    left: 250,
  },
  r100030minContainer2: {
    top: 663,
    zIndex: 26,
    position: "absolute",
  },
  reservar2: {
    zIndex: 27,
    maxHeight: 23,
    maxWidth: 87,
    minHeight: 23,
    minWidth: 87,
    width: 87,
    justifyContent: "center",
    textAlign: "center",
    left: 253,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    height: 23,
    fontSize: FontSize.size_mini,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
  },
  corteRealizadoNa1: {
    top: 698,
    zIndex: 28,
    left: 21,
  },
  degrad: {
    top: 552,
    zIndex: 29,
    left: 21,
  },
  r200030minContainer: {
    
    zIndex: 30,
    height: 24,
    width: 66,
    whiteSpace: "pre-wrap",
    left: 164,
    alignItems: "center",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    display: "flex",
    textAlign: "left",
    color: Color.black,
  },
  text7: {
    top: 1117,
    zIndex: 31,
  },
  maquna0: {
    top: 655,
    zIndex: 32,
    left: 21,
  },
  text8: {
    top: 1365,
    zIndex: 33,
  },
  navalhado: {
    top: 596,
    zIndex: 34,
    left: 22,
  },
  iconSearch: {
    height: "3.75%",
    width: "10.18%",
    top: "18.13%",
    right: "75.93%",
    bottom: "78.12%",
    left: "13.89%",
    maxHeight: "100%",
    zIndex: 35,
    position: "absolute",
  },
  buscarPorServios: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    backgroundColor: Color.gainsboro,
    top: 145,
    left: 53,
    zIndex: 36,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    position: "absolute",
    width: 244,
    height: 37,
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 10,
  },
  reserva: {
    
    backgroundColor: Color.darkgray,
    flex: 1,
    width: "100%",
  },
});

export default Reserva;
