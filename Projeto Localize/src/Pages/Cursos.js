
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default class Cursos extends Component {

    constructor(props){
        super(props)
        this.tela01 = this.tela01.bind(this)
        this.tela02 = this.tela02.bind(this)
        this.tela03 = this.tela03.bind(this)
        this.tela04 = this.tela04.bind(this)
        this.tela05 = this.tela05.bind(this)
        
    }
    tela01(){
        this.props.navigation.navigate("Semestres de Análise")
    } 
    tela02(){
        this.props.navigation.navigate("Semestres de Direito")
    }
    tela03(){
        this.props.navigation.navigate("Semestres de Psicologia")
    }
    tela04(){
        this.props.navigation.navigate("Semestres de Contabeis")
    }
    tela05(){
        this.props.navigation.navigate("Semestres de Administração")
    }

    render(){
        return (
            <View style={styles.container}>
              <Image 
              source={require('../Logo/LOCALIZE.png')}
                style={imag.image}>   
              </Image>

              <TouchableOpacity onPress={this.tela01}>
                <View 
                  style={botao01.button01}
                  title="Entrar"> 
                  <Text  style={texto.text}>Análise e Desen. de Sistemas</Text>
                </View>
              </TouchableOpacity>



              <TouchableOpacity onPress={this.tela02}>
                <View 
                  style={botao02.button02}
                  title="Entrar"> 
                  <Text  style={texto.text}>Direito</Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity onPress={this.tela03}>
                <View 
                  style={botao03.button03}
                  title="Entrar"> 
                  <Text  style={texto.text}>Psicologia</Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity onPress={this.tela04}>
                <View 
                  style={botao04.button04}
                  title="Entrar"> 
                  <Text  style={texto.text}>Ciências Contábeis</Text>
                </View>
              </TouchableOpacity>


              <TouchableOpacity  onPress={this.tela05}>
                <View 
                  style={botao05.button05}
                  title="Entrar"> 
                  <Text  style={texto.text}>Administração</Text>
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
    width: '50%',
    height: 40,
    marginBottom: 110,
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
const botao05 = StyleSheet.create({
    button05: {
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
    alignItems: "center",
  },
});