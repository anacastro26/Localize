
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class SemestreContabeis extends Component {
    constructor(props){
      super(props)
      this.sala1 = this.sala1.bind(this)
      this.sala2 = this.sala2.bind(this)
      this.sala3 = this.sala3.bind(this)
      this.sala4 = this.sala4.bind(this)
    }
    sala1(){
        this.props.navigation.navigate("Sala 215")
    } 
    sala2(){
        this.props.navigation.navigate("Sala 216")
    }
    sala3(){
      this.props.navigation.navigate("Sala 109")
    }
    sala4(){
      this.props.navigation.navigate("Sala 218")
    } 
    render(){
        return (
            <View style={styles.container}>
              <Image 
              source={require('../Logo/LOCALIZE.png')}
                style={imag.image}>   
              </Image>
              <TouchableOpacity onPress={this.sala1}>
                <View 
                  style={botao01.button01}
                  title="Entrar"> 
                  <Text  style={texto.text}>1º semestre</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.sala2}>
                <View 
                  style={botao02.button02}
                  title="Entrar"> 
                  <Text  style={texto.text}>3º semestre</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.sala3}>
                <View 
                  style={botao03.button03}
                  title="Entrar"> 
                  <Text  style={texto.text}>5º semestre</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.sala4}>
                <View 
                  style={botao04.button04}
                  title="Entrar"> 
                  <Text  style={texto.text}>7º semestre</Text>
                </View>
              </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#238F21',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
const imag = StyleSheet.create({
  image:{
    top: -75,
    width: '50%',
    height: 40,
    marginBottom: 60,
  }
});
const botao01 = StyleSheet.create({
    button01: {
      display: 'flex',
      marginBottom: 30,
      backgroundColor: '#ddd',
      width: 350,
      height: 60,
      borderRadius:5, 
      alignItems: "center",
      justifyContent: 'center'
  },
});
const botao02 = StyleSheet.create({
    button02: {
      display: 'flex',
      marginBottom: 30,
      backgroundColor: '#ddd',
      width: 350,
      height: 60,
      borderRadius:5, 
      alignItems: "center",
      justifyContent: 'center'
    },
});
const botao03 = StyleSheet.create({
    button03: {
      display: 'flex',
      marginBottom: 30,
      backgroundColor: '#ddd',
      width: 350,
      height: 60,
      borderRadius: 5, 
      alignItems: "center",
      justifyContent: 'center'
    },
});
const botao04 = StyleSheet.create({
    button04: {
      display: 'flex',
      marginBottom: 30,
      backgroundColor: '#ddd',
      width: 350,
      height: 60,
      borderRadius: 5, 
      alignItems: "center",
      justifyContent: 'center'
    },
});
const texto = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center"
  },
  
});