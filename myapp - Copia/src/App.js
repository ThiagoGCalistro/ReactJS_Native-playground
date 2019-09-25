import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      valor:"",
      gorjeta: "",
      quantidade: "",
      vlGorjeta:0,
      vlTotal:0,
      vlPessoa:0,
    }
  }
  
  add(){
    debugger;
    this.state.vlGorjeta = (parseInt(this.state.gorjeta) * parseInt(this.state.valor)) / 100;
    this.state.vlPessoa = (parseInt(this.state.vlGorjeta) + parseInt(this.state.valor))/parseInt(this.state.quantidade);
    this.state.vlTotal = parseInt(this.state.vlGorjeta) + parseInt(this.state.valor);
    this.setState({
      valor:"",
      gorjeta: "",
      quantidade: "",
      
    });
  }
  
  btnCalcular(){
   
  }
  btnZerar(){
    this.setState({
      vlTotal:0,
      vlPessoa: 0,
      vlGorjeta: 0,
    });
  }
  
  
  render() {
    
  
      let txt = 
     
      <div>
        <span>Conta:</span>
        <input  id="valor" type="number" value={this.state.valor} onChange={(e)=>this.setState({valor:e.target.value})}></input>
        <span>Gorjeta:</span>
        <input  id="gorjeta" type="number" value={this.state.gorjeta} onChange={(e)=>this.setState({gorjeta:e.target.value})}></input>
        <span>Quantidade de Pessoas:</span>
        <input  id="quantidade" type="number" value={this.state.quantidade} onChange={(e)=>this.setState({quantidade:e.target.value})}></input>
        <input type="button" value="Zerar" onClick={this.btnZerar.bind(this)} ></input>
        <input type="button" value="Calcular" onClick={this.add.bind(this)} ></input>
        
        
        <div>Gorjeta:</div><div>{this.state.vlGorjeta}</div>
        <div>Valor Total:</div><div>{this.state.vlTotal}</div>
        <div>Valor por Pessoa:</div><div>{this.state.vlPessoa}</div>
      </div>

    return (txt);
  }
  
}

