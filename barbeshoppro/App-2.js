import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "AwesomeProject/GlobalStyles";

const LoginTeste = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.loginTeste}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.loginTesteScrollViewContent}
    >
      <Image
        style={styles.bgIcon}
        resizeMode="cover"
        source={require("../AwesomeProject/assets/bg.png")}
      />
      <Image
        style={styles.barbeiroIcon}
        resizeMode="cover"
        source={require("../AwesomeProject/assets/barbeiro.png")}
      />
      <Image
        style={[styles.loginTesteChild, styles.loginLayout]}
        resizeMode="cover"
        source={require("../AwesomeProject/assets/rectangle-1.png")}
      />
      <Image
        style={[styles.loginTesteChild, styles.loginLayout]}
        resizeMode="cover"
        source={require("../AwesomeProject/assets/rectangle-1.png")}
      />
      <Text style={styles.bemVindo}>Bem vindo</Text>
      {/* <Text style={styles.loginTypo}>Login</Text>
      <TextInput
        style={styles.login1}
        placeholder="Login"
        keyboardType="default"
        placeholderTextColor="#000"
      />
      <Text style={styles.loginTypo}>Senha</Text>
      <TextInput
        style={styles.login1}
        placeholder="Senha"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#000"
      />
      <Image
        style={[styles.loginTesteInner, styles.loginLayout]}
        resizeMode="cover"
        source={require("../AwesomeProject/assets/rectangle-3.png")}
      /> */}
      <Text style={[styles.entrar, styles.entrarTypo]}>Entrar</Text>
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
  );
};

const styles = StyleSheet.create({
  loginTesteScrollViewContent: {
    flexDirection: "column",
  },
  loginLayout: {
    height: 48,
    marginTop: 22,
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
    marginTop: 22,
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
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 37,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    marginTop: 22,
  },
  loginTypo: {
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
    marginTop: 22,
  },
  login1: {
    minWidth: 244,
    minHeight: 48,
    maxWidth: 244,
    maxHeight: 48,
    backgroundColor: "#D9D9D9",
    marginTop: 22,
  },
  loginTesteInner: {
    borderRadius: Border.br_22xl,
    width: 116,
  },
  entrar: {
    width: 67,
    height: 27,
    marginTop: 22,
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
    marginTop: 22,
  },
  aindaNoTem: {
    position: "absolute",
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
  aindaNoTemConta: {
    marginTop: 22,
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
