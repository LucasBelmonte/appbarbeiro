const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import LoginTeste from "./screens/LoginTeste";
import PerfilBarbeiro from "./screens/PerfilBarbeiro";
import AgendaBarbeiro from "./screens/AgendaBarbeiro";
import CadastroBarbeiro from "./screens/CadastroBarbeiro";
import Reserva from "./screens/Reserva";
import AgendaCliente from "./screens/AgendaCliente";
import PerfilCliente from "./screens/PerfilCliente";
import InicioCliente from "./screens/InicioCliente";
import CadastroCliente from "./screens/CadastroCliente";
import RecuperarSenha from "./screens/RecuperarSenha";
import Cadastro from "./screens/Cadastro";
import EditarDadosPerfil from "./screens/EditarDadosPerfil";
import EditarDadosPerfilCliente from "./screens/EditarDadosPerfilCliente";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";



const App = () => {




  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Neonderthaw_regular: require("./assets/fonts/Neonderthaw_regular.ttf"),
    Inter_extralight: require("./assets/fonts/Inter_extralight.ttf"),
    Inter_light: require("./assets/fonts/Inter_light.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_light_italic: require("./assets/fonts/Inter_light_italic.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginTeste"
              component={LoginTeste}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilBarbeiro"
              component={PerfilBarbeiro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AgendaBarbeiro"
              component={AgendaBarbeiro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroBarbeiro"
              component={CadastroBarbeiro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reserva"
              component={Reserva}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AgendaCliente"
              component={AgendaCliente}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PerfilCliente"
              component={PerfilCliente}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InicioCliente"
              component={InicioCliente}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CadastroCliente"
              component={CadastroCliente}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarSenha"
              component={RecuperarSenha}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditarDadosPerfil"
              component={EditarDadosPerfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditarDadosPerfilCliente"
              component={EditarDadosPerfilCliente}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
