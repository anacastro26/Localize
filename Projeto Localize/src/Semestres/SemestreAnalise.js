import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class SemestreAnalise extends Component {
  constructor(props) {
    super(props);
    this.sala1 = this.sala1.bind(this);
    this.sala2 = this.sala2.bind(this);
  }
  sala1() {
    this.props.navigation.navigate("Sala 206");
  }
  sala2() {
    this.props.navigation.navigate("Sala 205");
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../Logo/LOCALIZE.png")} style={imag.image}></Image>
        <TouchableOpacity onPress={this.sala1}>
          <View style={botao01.button01} title="1º/2º semestre">
            <Text style={texto.text}>1º/2º semestre</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.sala2}>
          <View style={botao02.button02} title=" 3º/5ºsemestre">
            <Text style={texto.text}> 3º/5ºsemestre</Text>
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
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
  },
});
