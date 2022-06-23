import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";

export default class SemestreDireito extends Component {
  constructor(props) {
    super(props);
    this.sala1 = this.sala1.bind(this);
    this.sala2 = this.sala2.bind(this);
    this.sala4 = this.sala4.bind(this);
    this.Sala5semestre = this.Sala5semestre.bind(this);
    this.sala5 = this.sala5.bind(this);
    this.sala6 = this.sala6.bind(this);
    this.sala7 = this.sala7.bind(this);
    this.sala8 = this.sala8.bind(this);
    this.sala9 = this.sala9.bind(this);
    this.sala10 = this.sala10.bind(this);
  }
  sala1() {
    this.props.navigation.navigate("Sala 105");
  }
  sala2() {
    this.props.navigation.navigate("Sala 301");
  }
  sala4() {
    this.props.navigation.navigate("Sala 219");
  }

  Sala5semestre() {
    this.props.navigation.navigate("5º Semestre");
  }
  sala5() {
    this.props.navigation.navigate("Sala 302");
  }
  sala6() {
    this.props.navigation.navigate("Sala 303");
  }
  sala7() {
    this.props.navigation.navigate("Sala 304");
  }
  sala8() {
    this.props.navigation.navigate("Sala 204");
  }
  sala9() {
    this.props.navigation.navigate("Sala 209");
  }
  sala10() {
    this.props.navigation.navigate("Sala 202");
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image source={require("../Logo/LOCALIZE.png")} style={imag.image}></Image>
          <TouchableOpacity onPress={this.sala1}>
            <View style={botao01.button01} title="Entrar">
              <Text style={texto.text}>1º semestre</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.sala2}>
            <View style={botao02.button02} title="Entrar">
              <Text style={texto.text}>2º/3º semestre</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.Sala5semestre}>
            <View style={botao03.button03} title="Entrar">
              <Text style={texto.text}>5º semestre</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.sala4}>
            <View style={botao04.button04} title="Entrar">
              <Text style={texto.text}>6º semestre</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.sala5}>
            <View style={botao04.button04} title="Entrar">
              <Text style={texto.text}>7º "A" semestre</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.sala6}>
            <View style={botao04.button04} title="Entrar">
              <Text style={texto.text}>7º "B" semestre</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.sala7}>
            <View style={botao04.button04} title="Entrar">
              <Text style={texto.text}>8º semestre</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.sala8}>
            <View style={botao04.button04} title="Entrar">
              <Text style={texto.text}>9º "A" semestre</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.sala9}>
            <View style={botao04.button04} title="Entrar">
              <Text style={texto.text}>9º "B" semestre</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.sala10}>
            <View style={botao05.button05} title="Entrar">
              <Text style={texto.text}>10º semestre</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#238F21",
    alignItems: "center",
  },
  scrollView: {
    backgroundColor: "#238F21",
    height: "100%",
    width: "100%",
  },
});
const imag = StyleSheet.create({
  image: {
    top: 60,
    width: "50%",
    height: 40,
    marginBottom: 170,
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
const botao03 = StyleSheet.create({
  button03: {
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
const botao04 = StyleSheet.create({
  button04: {
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
const botao05 = StyleSheet.create({
  button05: {
    display: "flex",
    marginBottom: 50,
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
