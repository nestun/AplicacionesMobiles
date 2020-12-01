import React,{Component} from 'react';
import './App.css';
import axios from 'axios';



class App extends React.Component {

  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {consulteApi:false} ;
  }

  handlerClick(){
    console.log("handleado");
    
    var nombre = this.state.nombre;
    

    axios.get('https://swapi.dev/api/films/?search=',{params:{title:nombre}})
      .then( response =>{
        console.log(response.data);
        this.setState({consulteApi:true, data: response.data});
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }

  handlerChange(event){

    this.setState({nombre: event.target.value});
  }

  render (){

    var resultados;
      if(this.state.consulteApi != 0){

        const pelicula = this.state.data[0].title.map((o)=>
          <li key={o}>{o}</li>
        );

        resultados = (
          <div> 
            <h2>{this.state.data[0].title}</h2>
            <p><strong>Titulo: </strong>{this.state.data[0].title}</p>
            <p><strong>Pelicula:</strong></p>
            <p><strong>Episodio: </strong>{this.state.data[0].episode_id}</p>
            <p><strong>Director: </strong>{this.state.data[0].director}</p>
            <p><strong>Productor: </strong> {this.state.data[0].producer}</p>
      
          </div>
        );
      }else{
        resultados = <div></div>
      }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Star Wars API</h1>
          <p>Pelicula: </p>
          <input className="boton" type="text" onChange={this.handlerChange} ></input>
          <button className="boton" onClick={this.handlerClick}>Buscar</button>
         
          {resultados}
          
          
        </header>
      </div>
    );

  } 

}


export default App;
