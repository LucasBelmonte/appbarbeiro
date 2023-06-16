import * as React from "react";
import { useEffect, useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  View,
} from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const CadastroBarbeiro1 = () => {
  const navigation = useNavigation();
  const [nomeDaBarbearia, setNomeDaBarbearia] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirm, setSenhaConfirm] = useState('');
  
  
  const salvarCamposNoFirestore = async  () => {
    const dados = {
    nomeDaBarbearia,
    endereco,
    nome,
    userEmail:email,
    senha,
    tipo: 'Barbeiro',
  };

    try {
      await axios.post('http://10.0.0.3:5000/register',dados)
      .then((response) => console.log(response))
      .catch(err => console.error(err?.response?.data?.message));
 
    } catch (error) {
      console.error('Erro ao salvar os campos:', error);
    }
  };
  

  return (
    <ScrollView
      style={styles.cadastroBarbeiro}
      contentContainerStyle={styles.cadastroBarbeiroScrollViewContent}
    >
      <Text style={styles.text}>{` `}</Text>
      <Image
        style={styles.barbeiroIcon}
        resizeMode="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Text style={[styles.nomeDaBarbearia, styles.cadastroFlexBox]}>
        Nome da barbearia
      </Text>
      <Text style={[styles.cadastro, styles.cadastroText]}>Cadastro</Text>
      {/* <Image
        style={[styles.cadastroBarbeiroChild, styles.iconChildSpaceBlock]}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      /> */}
      <TextInput
        style={[styles.nomeDaBarbearia1, styles.senhaLayout]}
        placeholder="Nome da barbearia"
        keyboardType="default"
        placeholderTextColor="#979494"
        onChangeText={(text) => setNomeDaBarbearia(text)}
        value={nomeDaBarbearia}
      />
      {/* <Image
        style={[styles.bgIcon, styles.iconChildSpaceBlock]}
        resizeMode="cover"
        source={require("../assets/bg1.png")}
      /> */}
      <Text style={[styles.nomeDaBarbearia2, styles.iconChildSpaceBlock]}>
        Nome da barbearia
      </Text>
      {/* <Image
        style={[styles.cadastroBarbeiroItem, styles.iconChildSpaceBlock]}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      /> */}
      <TextInput
        style={[styles.enderecobarbearia, styles.senhaLayout]}
        placeholder="Endereço(Barbearia)"
        keyboardType="default"
        placeholderTextColor="#979494"
        onChangeText={(text) => setEndereco(text)}
        value={endereco}
      />
      {/* <Image
        style={[styles.cadastroBarbeiroInner, styles.iconChildSpaceBlock]}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      /> */}
      <TextInput
        style={[styles.nomeCompleto, styles.senhaLayout]}
        placeholder="Nome completo"
        keyboardType="default"
        placeholderTextColor="#979494"
        onChangeText={(text) => setNome(text)}
        value={nome}
      />
      {/* <Image
        style={[styles.rectangleIcon, styles.iconChildSpaceBlock]}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      /> */}
      <TextInput
        style={[styles.email, styles.senhaLayout]}
        placeholder="Email"
        keyboardType="default"
        placeholderTextColor="#979494"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      {/* <Image
        style={[styles.cadastroBarbeiroChild1, styles.iconChildSpaceBlock]}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      /> */}
      <TextInput
        style={[styles.senha, styles.senhaLayout]}
        placeholder="Senha"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#979494"
        onChangeText={(text) => setSenha(text)}
        value={senha}
      />
      {/* <Image
        style={[styles.cadastroBarbeiroChild2, styles.iconChildSpaceBlock]}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      /> */}
      <TextInput
        style={[styles.confirmarSenha, styles.senhaLayout]}
        placeholder="Confirmar senha"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#979494"
        onChangeText={(text) => setSenhaConfirm(text)}
        value={senhaConfirm}
      />
      <Pressable
        style={styles.wrapper}
        onPress={salvarCamposNoFirestore}
              >
        {/* <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-45.png")}
        /> */}
      </Pressable>
      <Pressable
        style={styles.iconChevronLeft}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/icon-back.png")}
        />
      </Pressable>
      <Text style={styles.cadastrar}>cadastrar</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cadastroBarbeiroScrollViewContent: {
    flexDirection: "column",
    paddingLeft: 58,
    paddingTop: 30,
  },
  cadastroFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 4,
    display: "flex",
  },
  cadastroText: {
    width: 244,
    height: 48,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  iconChildSpaceBlock: {
    display: "none",
    marginTop: 4,
  },
  senhaLayout: {
    backgroundColor: "#D9D9D9",
    maxWidth: 244,
    minWidth: 244,
    maxHeight: 48,
    minHeight: 48,
    marginTop: 4,
    paddingLeft: 15,

  },
  text: {
    width: 181,
    height: 37,
    zIndex: 0,
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
  },
  barbeiroIcon: {
    width: 236,
    height: 190,
    zIndex: 1,
    marginTop: 1,
  },
  nomeDaBarbearia: {
    color: Color.darkgray,
    width: 192,
    height: 32,
    zIndex: 2,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    alignItems: "flex-end",
  },
  cadastro: {
    alignItems: "center",
    zIndex: 3,
    height: 48,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 1,
    display: "flex",
    width: 244,
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
  },
  cadastroBarbeiroChild: {
    zIndex: 4,
    borderRadius: Border.br_8xs,
    display: "none",
    height: 48,
    width: 244,
  },
  nomeDaBarbearia1: {
    zIndex: 5,
    paddingLeft: 15,

  },
  bgIcon: {
    width: 390,
    height: 800,
    zIndex: 6,
  },
  nomeDaBarbearia2: {
    color: Color.gainsboro,
    zIndex: 7,
    height: 48,
    width: 244,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
      paddingLeft: 15,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    alignItems: "flex-end",
    textAlign: "left",
    display: "none",
  },
  cadastroBarbeiroItem: {
    zIndex: 8,
    borderRadius: Border.br_8xs,
    display: "none",
    height: 48,
    width: 244,
  },
  enderecobarbearia: {
    zIndex: 9,
    paddingLeft: 15,

  },
  cadastroBarbeiroInner: {
    zIndex: 10,
    borderRadius: Border.br_8xs,
    display: "none",
    height: 48,
    width: 244,
  },
  nomeCompleto: {
    zIndex: 11,
  },
  rectangleIcon: {
    zIndex: 12,
    borderRadius: Border.br_8xs,
    display: "none",
    height: 48,
    width: 244,
  },
  email: {
    zIndex: 13,
  },
  cadastroBarbeiroChild1: {
    zIndex: 14,
    borderRadius: Border.br_8xs,
    display: "none",
    height: 48,
    width: 244,
  },
  senha: {
    zIndex: 15,
  },
  cadastroBarbeiroChild2: {
    zIndex: 16,
    borderRadius: Border.br_8xs,
    display: "none",
    height: 48,
    width: 244,
  },
  confirmarSenha: {
    zIndex: 17,
  },
  icon: {
    borderRadius: Border.br_22xl,
    height: "100%",
    minWidth: 128,
    maxWidth: 128,
    maxHeight: 48,
    minHeight: 48,
    width: "100%",
  },
  wrapper: {
    width: 128,
    zIndex: 20,
    height: 48,
    marginTop: 4,
    left: 60,
  },
  vectorIcon: {
    width: 21,
    height: 30,
  },
  iconChevronLeft: {
    top: 40,
    left: 15,
    flexDirection: "row",
    zIndex: 19,
    position: "absolute",
  },
  cadastrar: {
    top: 660,
    left: 120,
    zIndex: 19,
    position: "absolute",
    textAlign: "center",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    color: Color.black,
    backgroundColor: Color.goldenrod,
    width: 128,
    height: 48,
    borderRadius: 41,
    // order: 18,
    flexGrow: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  cadastroBarbeiro: {
    backgroundColor: "#979494",
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default CadastroBarbeiro1;
