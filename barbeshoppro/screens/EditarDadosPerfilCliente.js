import React,{useState,useEffect} from "react";
import { Image, StyleSheet, View, Text,TextInput, Pressable,TouchableOpacity } from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";


const ExibirPerfil = ({}) => {
  const navigation = useNavigation();
  const [dados,setDados] = useState([]); 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');


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

    const updateProfile = async () => {
      try {
        setIsLoading(true);
        // Montar o objeto com os dados atualizados do perfil
        
        const updatedProfile = { 
          nome:nome?nome:dados?.nome,
          userEmail:email?email:dados?.userEmail
        };
        console.log(updatedProfile);

        // Enviar uma solicitação PUT para atualizar os dados do perfil do usuário
        await axios.put(`https://barber-shop-pro.onrender.com/editarCliente/${dados._id}`, updatedProfile);
        setIsLoading(false);
        navigation.goBack(); // Voltar para a tela anterior após a atualização bem-sucedida
      } catch (error) {
        console.error("Erro ao atualizar o perfil:", error);
        setIsLoading(false);
      }
    };

  return (
    <View style={styles.perfilBarbeiro}>
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
       
      <View style={[styles.perfilBarbeiroChild, styles.perfilChildBg]} />
      <Text style={[styles.barberShopPro, styles.seuPerfilText]}>
        BarbershopPRO
      </Text>
      <Text style={[styles.seuPerfil, styles.seuPerfilText]}>Editar perfil</Text>
      <View style={styles.container}>
     
      <TextInput
        style={styles.nomeEdit}
        placeholder={dados?.nome}
        keyboardType="default"
        placeholderTextColor="#979494"
        value={nome?nome:dados?.nome}
        onChangeText={value => setNome(value)}
      />
      <TextInput
        style={styles.emailEdit}
        placeholder={dados?.userEmail}
        keyboardType="default"
        placeholderTextColor="#979494"
        value={email?email:dados?.userEmail}
        onChangeText={value => setEmail(value)}
      />
      <TouchableOpacity style={styles.editarButton} onPress={updateProfile}>

        <Text>Editar</Text>

      </TouchableOpacity>  
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  
  nomeDaBarbeariaEdit: {
    minWidth: 244,
    minHeight: 48,
    maxWidth: 244,
    maxHeight: 48,
    backgroundColor: "#D9D9D9",
    top: 140,
    paddingLeft: 15,
    borderRadius: 5,
  },
  enderecoEdit: {
    minWidth: 244,
    minHeight: 48,
    maxWidth: 244,
    maxHeight: 48,
    backgroundColor: "#D9D9D9",
    top: 150,
    paddingLeft: 15,
    borderRadius: 5,
  },
  nomeEdit: {
    minWidth: 244,
    minHeight: 48,
    maxWidth: 244,
    maxHeight: 48,
    backgroundColor: "#D9D9D9",
    top: 160,
    paddingLeft: 15,
    borderRadius: 5,
  },
  emailEdit: {
    minWidth: 244,
    minHeight: 48,
    maxWidth: 244,
    maxHeight: 48,
    backgroundColor: "#D9D9D9",
    top: 170,
    paddingLeft: 15,
    borderRadius: 5,
  },
  container: {
   bottom: 120,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  editarButton: {
    fontSize: 18,
    padding:16,
    borderRadius: 5,
    backgroundColor: Color.goldenrod,
    width: 244, 
    marginTop: 180,
    alignItems: "center",
    borderRadius: Border.br_22xl,
    justifyContent: "center",
    alignItems: "center",
  },
  perfilBarbeiro: {
    backgroundColor: Color.darkgray,
    flex: 1,
    overflow: "hidden",
    height: 800,
    width: "100%",
  },
  perfilBarbeiroChild: {
    top: 35,
    left: 0,
    width: 400,
    height: 81,
  },
  perfilChildBg: {
    backgroundColor: Color.goldenrod,
    position: "absolute",
  },
  seuPerfil: {
    top: 122,
    left: 103,
    width: 180,
    height: 50,
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
    ellipseIconLayout: {
      zIndex: 18,
      height: 56,
      width: 56,
      top: 40,
      position: "absolute",

    },
});
export default ExibirPerfil;
