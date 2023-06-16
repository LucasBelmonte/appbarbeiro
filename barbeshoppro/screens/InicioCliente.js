import React,{useEffect,useState} from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  TextInput,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import axios from 'axios';


 
const InicioCliente = () => {
  const navigation = useNavigation();
  const [nomeBarbeiro, setnomeBarbeiro] = useState([]);
  const [tipo, setTipo] = useState([]);
  const [endereco, setEndereco] = useState([]);

  useEffect(() => {
    const buscarGeral = async () => {
      try {
        const response = await axios.get("http://10.0.0.3:5000/buscarGeral");
        console.log(response);
        const nomesBarbeiros = response.data.map(barbeiro => barbeiro.nome);
        const tipos = response.data.map(barbeiro => barbeiro.tipo);
        const enderecos = response.data.map(barbeiro => barbeiro.endereco);
        setnomeBarbeiro(nomesBarbeiros);
        setTipo(tipos);
        setEndereco(enderecos);
      } catch (error) {
        console.error("Erro ao buscar barbeiros:", error);
      }
    };
  
    buscarGeral();
  }, []);
  

  const buscarBarbeiros = async () => {
    try {
      const response = await axios.get("/http://10.0.0.3:5000/inicio");
      setBarbeiros(response.data);
    } catch (error) {
      console.error("Erro ao buscar barbeiros:", error);
    }
  };

  return (
    <ScrollView
      style={[styles.inicioCliente, styles.iconSearchLayout]}
      contentContainerStyle={styles.inicioClienteScrollViewContent}
    >
      {/* <Image
        style={styles.inicioClienteChild}
        contentFit="cover"
        source={require("../assets/rectangle-14.png")}
      /> */}
      <Pressable
        style={styles.inicioClienteItem}
        onPress={() => navigation.navigate("Reserva")}
      />
      <Pressable
        style={styles.barbeiroX}
        onPress={() => navigation.navigate("Reserva")}
      >
        <Text style={[styles.barbeiroX1, styles.barbeiroTypo]}>{nomeBarbeiro[0]}</Text>
      </Pressable>
      <Image
        style={[styles.inicioClienteInner, styles.inicioLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.barbeiroIcon, styles.barbeiroIconLayoutX]}
        resizeMode="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Pressable
        style={styles.ruaPapaJooContainer}
        onPress={() => navigation.navigate("Reserva")}
      >
        <Text style={styles.ruaTypo}>
         {endereco[0]}
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("Reserva")}
      />
      <Pressable
        style={[styles.barbeiroY, styles.barbeiroPosition1]}
        onPress={() => navigation.navigate("Reserva")}
      >
        <Text style={[styles.barbeiroY1, styles.barbeiroTypo]}>Barbeiro Y</Text>
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={[styles.barbeiro, styles.barbeiroPosition]}
        onPress={() => navigation.navigate("Reserva")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/barbeiro.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.inicioClienteChild1, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("Reserva")}
      />
      <Pressable
        style={[styles.barbeiroZ, styles.barbeiroPosition1]}
        onPress={() => navigation.navigate("Reserva")}
      >
        <Text style={[styles.barbeiroZ1, styles.barbeiroTypo]}>Barbeiro Z</Text>
      </Pressable>
      <Image
        style={[styles.inicioClienteChild2, styles.ellipseIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <ImageBackground
        style={[styles.barbeiroIcon1, styles.barbeiroPosition]}
        resizeMode="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Text style={[styles.ruaPapaJoo, styles.ruaTypo]}>
        Rua papa João XXIII, Nº 123 Madalena,50920-000, Recife
      </Text>
      <View style={styles.rectangleView} />
      <Text style={styles.barbershoppro}>BarbershopPRO</Text>
      <Pressable
        style={[styles.agenda, styles.agendaPosition]}
        onPress={() => navigation.navigate("AgendaCliente")}
      >
        <Text style={[styles.agenda1, styles.inicioTypo]}>Agenda</Text>
      </Pressable>
      <Pressable
        style={[styles.perfil, styles.agendaPosition]}
        onPress={() => navigation.navigate("PerfilCliente")}
      >
        <Text style={[styles.perfil1, styles.inicioTypo]}>Perfil</Text>
      </Pressable>
      <Text style={[styles.inicio, styles.inicioTypo]}>Inicio</Text>
      <Image
        style={[styles.inicioClienteChild3, styles.inicioLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.barbeiroIcon2, styles.barbeiroIconLayout]}
        contentFit="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Text style={[styles.ruaPapaJoo1, styles.barbeiroPosition]}>
        Rua papa João XXIII, Nº 123,50920-000, Recife
      </Text>
      <Image
        style={styles.iconSearch}
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
  inicioClienteScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 360,
    paddingVertical: 800,
  },
  iconSearchLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  barbeiroTypo: {
    left: 20,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 99,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.size_xl,
  },
  inicioLayout: {
    height: 56,
    width: 56,
    position: "absolute",
    
  },
  barbeiroIconLayout: {
    height: 38,
    left: 330,
    width: 50,
  },
  barbeiroIconLayoutX: {
    height: 38,
    left: 50,
    width: 50,
  },
  rectanglePressableLayout: {
    left: 40,
    height: 136,
    width: 316,
    backgroundColor: Color.goldenrod,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  barbeiroPosition1: {
    left: 110,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 50,
    height: 56,
    width: 56,
    position: "absolute",
  },
  barbeiroPosition: {
    left: 53,
    position: "absolute",
  },
  ruaTypo: {    
    width: 299,
    fontFamily: FontFamily.interExtralight,
    fontWeight: "200",
    fontSize: FontSize.size_mini,
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
  },
  agendaPosition: {
    top: 0,
    position: "absolute",
  },
  inicioTypo: {
    top: 85,
    fontFamily: FontFamily.interLightItalic,
    fontWeight: "300",
    fontStyle: "italic",
    height: 32,
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
  inicioClienteChild: {
    width: 297,
    height: 48,
    zIndex: 0,
    borderRadius: Border.br_8xs,
  },
 
  inicioClienteItem: {
    top: 216,
    left: 40,
    zIndex: 2,
    height: 136,
    width: 316,
    backgroundColor: Color.goldenrod,
    position: "absolute",
    borderRadius: Border.br_8xs,
  },
  barbeiroX1: {
    height: 50,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 99,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  barbeiroX: {
    left: 101,
    top: 226,
    zIndex: 3,
    position: "absolute",
  },
  inicioClienteInner: {
    top: 224,
    zIndex: 4,
    left: 45,
  },
  barbeiroIcon: {
    top: 233,
    zIndex: 5,
    left: 50,
    position: "absolute",
  },
  ruaPapaJooContainer: {
    top: 296,
    zIndex: 6,
    left: 50,
    position: "absolute",
  },
  rectanglePressable: {
    top: 377,
    zIndex: 7,
    
  },
  barbeiroY1: {
    
    height: 35,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 99,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  barbeiroY: {
    top: 387,
    zIndex: 8,
    
  },
  ellipseIcon: {
    top: 385,
    zIndex: 9,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  barbeiro: {
    top: 394,
    zIndex: 10,
    height: 38,
    width: 50,
  },
  inicioClienteChild1: {
    top: 537,
    zIndex: 11,
  },
  barbeiroZ1: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 99,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.interRegular,
  },
  barbeiroZ: {
    top: 558,
    zIndex: 12,
    
  },
  inicioClienteChild2: {
    top: 545,
    zIndex: 13,
  },
  barbeiroIcon1: {
    top: 554,
    zIndex: 14,
    height: 38,
    width: 50,
  },
  ruaPapaJoo: {
    top: 626,
    zIndex: 15,
    left: 50,
    position: "absolute",
  },
  rectangleView: {
    top: 35,
    left: 0,
    width: 400,
    height: 81,
    zIndex: 16,
    backgroundColor: Color.goldenrod,
    position: "absolute",
  },
  barbershoppro: {
    top: 35,
    left: 10,
    fontSize: FontSize.size_11xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 261,
    zIndex: 17,
    height: 32,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
    alignItems: "flex-end",
    display: "flex",
  },
  agenda1: {
    width: 78,
  },
  agenda: {
    left: 66,
    zIndex: 18,
  },
  perfil1: {
    width: 53,
  },
  perfil: {
    left: 152,
    zIndex: 19,
  },
  inicio: {
    left: 5,
    width: 52,
    zIndex: 20,
    top: 68,
    position: "absolute",
  },
  inicioClienteChild3: {
    top: 40,
    left: 327,
    zIndex: 21,
  },
  barbeiroIcon2: {
    top: 45,
    left: 331,
    zIndex: 22,
    position: "absolute",
  },
  ruaPapaJoo1: {
    top: 466,
    zIndex: 23,
    width: 299,
    fontFamily: FontFamily.interExtralight,
    fontWeight: "200",
    fontSize: FontSize.size_mini,
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
  },
  iconSearch: {
    height: "3.75%",
    width: "10.18%",
    top: "18.13%",
    right: "75.93%",
    bottom: "78.12%",
    left: "13.89%",
    maxHeight: "100%",
    zIndex: 24,
    position: "absolute",
    backgroundColor: Color.black,

  },
  buscarPorServios: {
    top: 145,
    left: 60,
    zIndex: 25,
    position: "absolute",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    backgroundColor: Color.gainsboro,
    width: 244,
    height: 37,
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 5,
    paddingLeft: 10,
  },
  inicioCliente: {
    backgroundColor: Color.darkgray,
    flex: 1,
    width: "100%",
  },
});

export default InicioCliente;
