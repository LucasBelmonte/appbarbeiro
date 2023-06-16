import React,{useState,useEffect} from "react";


import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginTeste = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Login = async  () => {
    try{
    const dados = {
      userEmail:email,
      senha,
      };
        await axios.post('http://10.0.0.3:5000/login', dados)
        .then((response) => {
          AsyncStorage.setItem('userData',JSON.stringify(response.data));

            if (response.data.tipo === 'Cliente') {
              
              navigation.navigate('AgendaCliente');

            } else if (response.data.tipo === 'Barbeiro') {
              
              navigation.navigate('AgendaBarbeiro');
            }
          
        })
        .catch(err => console.error(err?.response?.data?.message));
    } catch (error) {
      console.error('Erro ao salvar os campos:', error);
    }
    };

  return (
    <KeyboardAvoidingView behavior="position">
    <ScrollView
      style={styles.loginTeste}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.loginTesteScrollViewContent}
    >
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
        style={[styles.loginTesteChild, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Image
        style={[styles.loginTesteChild, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={styles.bemVindo}>Bem vindo</Text>
      <Text style={styles.loginTypo}>Login</Text>
      <TextInput
        style={styles.login1}
        placeholder="Digite seu E-mail "
        keyboardType="default"
        placeholderTextColor="#979494"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <Text style={styles.loginTypo}>Senha</Text>
      <TextInput
        style={styles.login1}
        placeholder="Digite sua senha"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#979494"
        value={senha}
        onChangeText={value => setSenha(value)}

      />
      {/* <Image
        style={[styles.loginTesteInner, styles.loginLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-3.png")}
      /> */}
      <Pressable style={styles.button}
                  onPress={Login}
                  >
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
      {/* <Text style={[styles.entrar, styles.entrarTypo]}>Entrar</Text> */}

      <Pressable
        style={styles.esqueceuASenhaContainer}
        onPress={() => navigation.navigate("RecuperarSenha")}
      >
        <Text style={[styles.esqueceuASenha, styles.esqueceuASenhaLayout]}>
          Esqueceu a senha?
        </Text>
      </Pressable>
      <Pressable
        style={[styles.aindaNoTemConta, styles.esqueceuASenhaLayout]}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={[styles.aindaNoTem, styles.entrarTypo]}>
          Ainda não tem conta?
        </Text>
      </Pressable>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  loginTesteScrollViewContent: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginLayout: {
    height: 48,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entrarTypo: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    color: Color.black,
  },
  buttonText: {
    // fontFamily: 'Inter',
    // fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 24,
    display: 'flex',
    alignItems: 'center',
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  button: {
    marginTop: 15,
    width: 244,
    height: 48,
    backgroundColor: '#DAA520',
    borderRadius: 41,
    alignItems: 'center',
    justifyContent: 'center',
  },
  esqueceuASenhaLayout: {
    height: 26,
    width: 223,
  },
  bgIcon: {
    width: 390,
    height: 800,
    display: "none",
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
  loginTesteChild: {
    borderRadius: Border.br_8xs,
    width: 244,
    display: "none",
  },
  bemVindo: {
    fontSize: FontSize.size_31xl,
    fontFamily: FontFamily.neonderthawRegular,
    width: 273,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "#0000003f",
    height: 60,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    marginTop: 10,
  },
  loginTypo: {
    borderColor: "#000",
    width: 181,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 37,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    marginTop: 15,
  },
  login1: {
    minWidth: 244,
    minHeight: 48,
    maxWidth: 244,
    maxHeight: 48,
    backgroundColor: "#D9D9D9",
    marginTop: 15,
    paddingLeft: 15,
    borderRadius: 5,
  },
  loginTesteInner: {
    borderRadius: Border.br_22xl,
    width: 116,
  },
  entrar: {
    width: 67,
    height: 27,
    marginTop: 15,
  },
  esqueceuASenha: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    color: Color.black,
  },
  esqueceuASenhaContainer: {
    marginTop: 15,
  },
  aindaNoTem: {
    position: "absolute",
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  aindaNoTemConta: {
    marginTop: 15,
  },
  loginTeste: {
    backgroundColor: Color.darkgray,
    flex: 1,
    overflow: "hidden",
    minWidth: 360,
    minHeight: 800,
    maxWidth: "100%",
    maxHeight: 800,
    width: "100%",
  },
});

export default LoginTeste;
