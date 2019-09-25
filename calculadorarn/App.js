import * as React from 'react';
import {Alert, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  constructor(props){
    super(props); 

    this.state = {
      valor:"",
      gorjeta:"",
      quantidade:"",
      vltotal:"",
      vlgorjeta:"",
      vlpessoa:"",
    }
  }

  calcular = () =>{
    if(this.state.gorjeta != "" && this.state.valor != "" && this.state.quantidade != ""){
      let vlgorjeta = (parseFloat(this.state.gorjeta) * parseFloat(this.state.valor)) / 100;
      let vltotal = parseFloat(this.state.valor) + parseFloat(vlgorjeta);
      let vlpessoa = parseFloat(vltotal) / parseFloat(this.state.quantidade);
      this.setState({
        vltotal:vltotal,
        vlgorjeta:vlgorjeta,
        vlpessoa:vlpessoa,
      });
    }
  }
  zerar=()=>{
    this.setState({
      valor:"",
      gorjeta:"",
      quantidade:"",
      vltotal:"",
      vlgorjeta:"",
      vlpessoa:"",
    });
  }
  render(){
    let ret = 
    <View>
        <Text style={styles.input2}> valor </Text>
        <TextInput keyboardType = "number-pad"
                   style={styles.input}
                   value={this.state.valor} 
                   onChangeText={(valor)=> this.setState({valor:valor})}
        />
        <Text> Gorjeta % </Text>
        <TextInput keyboardType = "number-pad"
                   style={styles.input}
                   value={this.state.gorjeta}
                   onChangeText={(gorjeta)=> this.setState({gorjeta:gorjeta})}
        />
        <Text> Quantidade de Pessoas </Text>
        <TextInput keyboardType = "number-pad"
                   style={styles.input} 
                   value={this.state.quantidade}
                   onChangeText={(quantidade)=>this.setState({quantidade:quantidade})}
        />
        <TouchableOpacity style={styles.btnCal} onPress={this.calcular}>
              <Text> Calcular </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAdd} onPress={this.zerar}>
              <Text> Zerar </Text>
        </TouchableOpacity>
        <View style={styles.listContainer}>
            <Text>Valor Gorjeta: {this.state.vlgorjeta} </Text> 
            <Text>Valor Total: {this.state.vltotal} </Text>
            <Text>Valor por Pessoa: {this.state.vlpessoa}</Text>
        </View>
    </View>

    return (ret);
  }
}
const styles = StyleSheet.create({
  input2:{
    marginTop:40,
  },
  input: {

    borderColor: "green",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    flexGrow:1

  }, 

  btnAdd : {
        backgroundColor: "green",
        padding: 10,
        textAlign:"center",
  },
  btnCal : {
        backgroundColor: "yellow",
        padding: 10,
        textAlign:"center",
  },

  listContainer : {

    margin: 10
  }

});