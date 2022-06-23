import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //Tipo de Navegação
import Home from './src/Pages/Home';
import Cursos from './src/Pages/Cursos';

//Semestres
import SemestreAnalise from './src/Semestres/SemestreAnalise';
import SemestreAdministracao from './src/Semestres/SemestreAdministracao';
import SemestreContabeis from './src/Semestres/SemestreContabeis';
import SemestreDireito from './src/Semestres/SemestreDireito';
import SemestrePsicologia from './src/Semestres/SemestrePsicologia';

//Salas
//Analise e Desen. de Sistemas
import SalaAds1 from './src/Salas/Ads/Sala205';
import SalaAds2 from './src/Salas/Ads/Sala206';
//Administração
import SalaAmd1 from './src/Salas/Adm/Sala207';
import SalaAmd2 from './src/Salas/Adm/Sala208';
import SalaAmd3 from './src/Salas/Adm/Sala213';
import SalaAmd4 from './src/Salas/Adm/Sala214';
//Contabeis
import SalaCont1 from './src/Salas/Contabeis/Sala215';
import SalaCont2 from './src/Salas/Contabeis/Sala216';
import SalaCont3 from './src/Salas/Contabeis/Sala109';
import SalaCont4 from './src/Salas/Contabeis/Sala218';
//Psicologia
import SalaPsico1 from './src/Salas/Psico/Sala203';
import SalaPsico2 from './src/Salas/Psico/Sala201';
import SalaPsico3 from './src/Salas/Psico/Sala212';
import SalaPsico4 from './src/Salas/Psico/Sala210';
import SalaPsico5 from './src/Salas/Psico/Sala211';
//Direto
import SalaDiret1 from './src/Salas/Direito/Sala105';
import SalaDiret2 from './src/Salas/Direito/Sala301';
import SalaDiret4 from './src/Salas/Direito/Sala219';
import Sala5semestre from './src/Salas/Direito/Salas5semestre';
import SalaDiret3 from './src/Salas/Direito/Sala107';
import SalaDiret03 from './src/Salas/Direito/Sala108';
import SalaDiret05 from './src/Salas/Direito/Sala302';
import SalaDiret06 from './src/Salas/Direito/Sala303';
import SalaDiret07 from './src/Salas/Direito/Sala304';
import SalaDiret08 from './src/Salas/Direito/Sala204';
import SalaDiret09 from './src/Salas/Direito/Sala209';7
import SalaDiret10 from './src/Salas/Direito/Sala202';

const Stack = createNativeStackNavigator()

export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Cursos" component={Cursos}/>
          <Stack.Screen name="Semestres de Análise" component={SemestreAnalise}/>
          <Stack.Screen name="Semestres de Direito" component={SemestreDireito}/>
          <Stack.Screen name="Semestres de Psicologia" component={SemestrePsicologia}/>
          <Stack.Screen name="Semestres de Contabeis" component={SemestreContabeis}/>
          <Stack.Screen name="Semestres de Administração" component={SemestreAdministracao}/>


          <Stack.Screen name="Sala 206" component={SalaAds1}/>
          <Stack.Screen name="Sala 205" component={SalaAds2}/>

          <Stack.Screen name="Sala 207" component={SalaAmd1}/>
          <Stack.Screen name="Sala 208" component={SalaAmd2}/>
          <Stack.Screen name="Sala 213" component={SalaAmd3}/>
          <Stack.Screen name="Sala 214" component={SalaAmd4}/>

          <Stack.Screen name="Sala 215" component={SalaCont1}/>
          <Stack.Screen name="Sala 216" component={SalaCont2}/>
          <Stack.Screen name="Sala 109" component={SalaCont3}/>
          <Stack.Screen name="Sala 218" component={SalaCont4}/>

          <Stack.Screen name="Sala 203" component={SalaPsico1}/>
          <Stack.Screen name="Sala 201" component={SalaPsico2}/>
          <Stack.Screen name="Sala 212" component={SalaPsico3}/>
          <Stack.Screen name="Sala 210" component={SalaPsico4}/>
          <Stack.Screen name="Sala 211" component={SalaPsico5}/>

          <Stack.Screen name="Sala 105" component={SalaDiret1}/>
          <Stack.Screen name="Sala 301" component={SalaDiret2}/>
          <Stack.Screen name="Sala 219" component={SalaDiret4}/>
          <Stack.Screen name="Sala 107" component={SalaDiret3}/>
          <Stack.Screen name="Sala 108" component={SalaDiret03}/>
          <Stack.Screen name="5º Semestre" component={Sala5semestre}/>
          <Stack.Screen name="Sala 302" component={SalaDiret05}/>
          <Stack.Screen name="Sala 303" component={SalaDiret06}/>
          <Stack.Screen name="Sala 304" component={SalaDiret07}/>
          <Stack.Screen name="Sala 204" component={SalaDiret08}/>
          <Stack.Screen name="Sala 209" component={SalaDiret09}/>
          <Stack.Screen name="Sala 202" component={SalaDiret10}/>

        </Stack.Navigator>
      </NavigationContainer>    
    )
  }

}
