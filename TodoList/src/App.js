import React from 'react';
import ReactDOM from 'react-dom';
import MyRow from './MyRow';

export default class App extends React.Component{
  constructor (props)
  {
    super(props);
    this.state = {
      valor: "",
      dados:[]
    }
    this.ItemEdicao = "";
  }
  add = () => {
    if (this.ItemEdicao == "")
    {
      this.state.dados.push(this.state.valor);
    }
    else 
    {
      this.state.dados.forEach((linha, i) =>{
        if (linha == this.ItemEdicao)
        {
          this.state.dados[i] = this.state.valor;
          this.ItemEdicao = "";
        }
      });
    }
    this.setState({
      valor: "",
      dados: this.state.dados
    });
  } 
  remove = (item) =>{
    let dados = this.state.dados.filter((linha)=>{
        return linha != item;
    });
    debugger;
    this.setState({
      dados: dados
    });
  }
  edit = (item) =>{
       debugger;
    this.ItemEdicao = item;
    this.setState({
      valor: item
    });
  }
  render() {
    let linha = [];
    debugger;
    this.state.dados.forEach((item)=>{
      linha.push(<MyRow valor={item} onRemove={this.remove} onEdit={this.edit} />)
    });
var txt =
      <div>
        {this.state.dados.length}<br></br>
        <span>Item:</span>
        <input  id="valor" type="text" value={this.state.valor} onChange={(e)=>this.setState({valor:e.target.value})}></input>
        <input type="button" value="adicionar" onClick={this.add.bind(this)} ></input>
        <div>
            <table>
              {linha}
            </table>
        </div>  
      </div>
    return (txt);
  }
}

