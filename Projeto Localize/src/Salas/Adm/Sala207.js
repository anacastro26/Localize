
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar } from 'react-native';


export default class SemestreAdministracao extends Component {
    render(){
        return (
          <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
               <Image 
                source={require('../Adm/Imagens/LOCALIZE.png')}
                style={logo.logo}>   
              </Image>
              <Text  style={texto.text}>Sua sala é a: 207</Text> 
              <Text  style={texto01.text01}>Ao entrar na faculdade, siga pela escada ao lado direito.</Text>
              <Image 
                source={require('../Adm/Imagens/primeiroandar.png')}
                style={imag.image}>   
              </Image>
              <Text  style={texto02.text02}>Após subir a escada, siga pelo corredor direito até sua sala.</Text>
              <Image 
                source={require('../Adm/Imagens/sala207.png')}
                style={imag02.image02}>   
              </Image>
            </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#238F21',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: '#238F21',
    height: '100%',
    width:'100%',
  },
});
const logo = StyleSheet.create({
  logo:{
    width: '50%',
    height: 40,
    top:50, 
    marginBottom: 150, 
  }
});
const imag = StyleSheet.create({
  image:{
    width: '90%',
    height: 200,
    marginBottom: 70,
    borderRadius: 10, 
  }
});

const texto = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "bold",    
    width: '80%',
    height: 40,
    marginBottom: 70,
  },
  
});

const texto01 = StyleSheet.create({
  text01: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  
});

const imag02 = StyleSheet.create({
  image02:{
    width: '90%',
    height: 200,
    marginBottom: 50,
    borderRadius: 10,
  }
});
const texto02 = StyleSheet.create({
  text02: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  
});