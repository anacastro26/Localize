import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.tela = this.tela.bind(this);
  }
  tela() {
    this.props.navigation.navigate("Cursos");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../Logo/LOCALIZE.png")} style={imag.image}></Image>
        <TouchableOpacity onPress={this.tela}>
          <View style={botao.botaozinho} title="Entrar">
            <Text style={texto.text}>Entrar</Text>
          </View>
        </TouchableOpacity>
        <Image source={require("../Logo/Unifasipe.png")} style={imagem.imagem}></Image>
        <Image source={require("../Logo/ADS.png")} style={imagem01.imagem01}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#238F21",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});
const imag = StyleSheet.create({
  image: {
    width: "80%",
    height: 65,
    marginBottom: 70,
  },
});
const botao = StyleSheet.create({
  botaozinho: {
    display: "flex",
    backgroundColor: "#ddd",
    width: 220,
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
const texto = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
  },
});
const imagem = StyleSheet.create({
  imagem: {
    width: "35%",
    height: 40,
    top: 260,
    right: 120,
  },
});
const imagem01 = StyleSheet.create({
  imagem01: {
    width: "40%",
    height: 50,
    top: 215,
    left: 100,
  },
});
