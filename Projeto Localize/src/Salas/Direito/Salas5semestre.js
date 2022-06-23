import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class SemestreDireito extends Component {
  constructor(props) {
    super(props);
    this.sala1 = this.sala1.bind(this);
    this.sala2 = this.sala2.bind(this);
  }
  sala1() {
    this.props.navigation.navigate("Sala 107");
  }
  sala2() {
    this.props.navigation.navigate("Sala 108");
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../Direito/Imagens/LOCALIZE.png")} style={imag.image}></Image>
        <TouchableOpacity onPress={this.sala1}>
          <View style={botao01.button01} title="Sala 107">
            <Text style={texto.text}> Sala 107</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.sala2}>
          <View style={botao02.button02} title=" Sala 108">
            <Text style={texto.text}> Sala 108</Text>
          </View>
        </TouchableOpacity>
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
  },
});
const imag = StyleSheet.create({
  image: {
    top: -130,
    width: "50%",
    height: 40,
    marginBottom: 110,
  },
});
const botao01 = StyleSheet.create({
  button01: {
    display: "flex",
    marginBottom: 30,
    backgroundColor: "#ddd",
    width: 350,
    height: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
const botao02 = StyleSheet.create({
  button02: {
    display: "flex",
    marginBottom: 30,
    backgroundColor: "#ddd",
    width: 350,
    height: 60,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
const texto = StyleSheet.create({
  text: {
    color: "030303",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
  },
});
