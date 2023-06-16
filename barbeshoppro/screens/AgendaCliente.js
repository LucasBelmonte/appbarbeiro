
import * as React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Pressable,
  Text,
  ImageBackground,Image,
} from "react-native";
// import {  } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AgendaCliente = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.agendaCliente}
      contentContainerStyle={styles.agendaClienteScrollViewContent}
    >
      <View style={[styles.agendaClienteChild, styles.rectangleViewBg]} />
      <Image
        style={styles.agendaClienteItem}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      />
      <Text style={styles.cancelar}>Cancelar</Text>
      <Text style={[styles.agendamentos, styles.agendamentosTypo]}>
        Agendamentos
      </Text>
      <Text style={styles.barbeiroX}>Barbeiro X</Text>
      <Image
        style={[styles.agendaClienteInner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <ImageBackground
        style={[styles.barbeiroIcon, styles.barbeiroIconLayout]}
        resizeMode="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Text style={[styles.ruaPapaJoo, styles.min1Typo]}>
        Rua papa João XXIII, Nº 123 San martin,50920-000, Recife
      </Text>
      <Text style={[styles.r100030minContainer, styles.corteRealizadoNaText]}>
        <Text style={styles.r100030minContainer1}>
          <Text>
            <Text style={styles.r1000Typo}>
              <Text style={styles.r10001}>R$ 10,00</Text>
            </Text>
          </Text>
          <Text>
            <Text style={styles.r1000Typo}>
              <Text style={styles.text1}>{`           `}</Text>
            </Text>
            <Text style={styles.text1}>
              <Text style={styles.min1Typo}>30min</Text>
            </Text>
          </Text>
        </Text>
      </Text>
      <Text style={[styles.corteRealizadoNa, styles.r1000Typo]}>
        Corte realizado na maquina
      </Text>
      <Text
        style={[styles.data20042023Hora1500, styles.corteNormalTypo]}
      >{`Data: 20/04/2023 Hora:15:00 `}</Text>
      <Text style={[styles.corteNormal, styles.corteNormalTypo]}>
        Corte normal
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.barbershoppro, styles.agendamentosTypo]}>
        BarbershopPRO
      </Text>
      <Image
        style={[styles.barbeiroIcon1, styles.barbeiroIconLayout]}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  agendaClienteScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 800,
    paddingVertical: 360,
  },
  rectangleViewBg: {
    backgroundColor: Color.goldenrod,
    position: "absolute",
  },
  agendamentosTypo: {
    height: 39,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 56,
    width: 56,
    position: "absolute",
  },
  barbeiroIconLayout: {
    height: 38,
    width: 50,
    position: "absolute",
  },
  min1Typo: {
    fontFamily: FontFamily.interExtralight,
    fontWeight: "200",
  },
  corteRealizadoNaText: {
    height: 24,
    alignItems: "center",
    textAlign: "left",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  r1000Typo: {
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  corteNormalTypo: {
    alignItems: "center",
    left: 36,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 23,
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  inicioPosition: {
    top: 68,
    position: "absolute",
    
  },
  inicio1Typo: {
    left: 5,
    width: 70,
    zIndex: 20,
    top: 18,
    position: "absolute",
    fontFamily: FontFamily.interLightItalic,
    fontStyle: "italic",
    fontWeight: "300",
    fontSize: FontSize.size_xl,
    height: 32,
    textAlign: "left",
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
  agendaClienteChild: {
    top: 204,
    left: 21,
    borderRadius: Border.br_8xs,
    width: 316,
    height: 250,
    zIndex: 0,
  },
  agendaClienteItem: {
    top: 283,
    left: 243,
    borderRadius: Border.br_22xl,
    width: 92,
    height: 36,
    zIndex: 1,
    position: "absolute",
  },
  cancelar: {
    top: 281,
    left: 248,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    textAlign: "center",
    justifyContent: "center",
    width: 87,
    zIndex: 2,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 23,
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  agendamentos: {
    top: 137,
    left: 57,
    width: 237,
    zIndex: 3,
  },
  barbeiroX: {
    top: 219,
    left: 100,
    width: 99,
    height: 35,
    zIndex: 4,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  agendaClienteInner: {
    top: 215,
    left: 31,
    zIndex: 5,
  },
  barbeiroIcon: {
    top: 224,
    zIndex: 6,
    left: 36,
  },
  ruaPapaJoo: {
    top: 399,
    zIndex: 7,
    width: 299,
    left: 36,
    textAlign: "left",
    fontWeight: "200",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  r10001: {
    fontSize: FontSize.size_mini,
  },
  text1: {
    fontSize: FontSize.size_3xs,
  },
  r100030minContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  r100030minContainer: {
    top: 289,
    left: 153,
    whiteSpace: "pre-wrap",
    width: 66,
    zIndex: 8,
  },
  corteRealizadoNa: {
    top: 323,
    width: 208,
    zIndex: 9,
    height: 24,
    alignItems: "center",
    textAlign: "left",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    display: "flex",
    color: Color.black,
    position: "absolute",
    left: 36,
    fontSize: FontSize.size_mini,
  },
  data20042023Hora1500: {
    top: 357,
    zIndex: 10,
    width: 299,
  },
  corteNormal: {
    top: 287,
    width: 109,
    zIndex: 11,
  },
  rectangleView: {
    top: 35,
    left: 0,
    width: 400,
    height: 81,
    zIndex: 12,
  },
  ellipseIcon: {
    top: 40,
    left: 315,
    zIndex: 13,
  },
  barbershoppro: {
    top: 35,
    left: 10,
    width: 261,
    zIndex: 14,
  },
  barbeiroIcon1: {
    top: 45,
    left: 320,
    zIndex: 15,
  },
  inicio1: {
    width: 52,
  },
  inicio: {
    left: 5,
    zIndex: 16,
  },
  perfil1: {
    width: 53,
  },
  perfil: {
    left: 152,
    zIndex: 17,
  },
  agenda1: {
    width: 78,
  },
  agenda: {
    left: 66,
    zIndex: 18,
  },
  agendaCliente: {
    backgroundColor: Color.darkgray,
    flex: 1,
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
});

export default AgendaCliente;
