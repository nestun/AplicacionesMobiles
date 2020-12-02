import React from 'react';
import './App.css';

const request = require('request-promise');

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                inputField: "Value", film: null
            };
            this.updateInputValue = this.updateInputValue.bind(this);
        }
        handlerBtn = () => {

            var options = {
                method: 'GET',
                uri: `https://swapi.dev/api/films/${this.state.inputField}` ,
                json: true
            };
      
            var response = request(options).then(film => {

                console.log(film.title);
                console.log(film.episode_id);
                this.setState({
                         
                    film: film
                })
                console.log(this.state);
            });
           
        }

        numberList = () => {
                return(<ul><li>{this.state.film.powerstats.combat}</li>
                <li>{this.state.inputField}</li></ul>)
        }
        updateInputValue(evt) {

            this.setState ({inputField: evt.target.value});

        }
        

render() {
   
    return (

        <div className='container'>

            <button onClick={this.handlerBtn}> Obtener datos de Api </button>
            <input type="text" onChange={ this.updateInputValue} onKeyPress={this.handlerPress} placeholder='Número de pelicula' />
            <h1 class='center'>Ingresa el número de película y obtene su información</h1>
            {this.state.film &&   
           <div className='container'>
                <h1 class='center'>Titulo: {this.state.film.title}</h1>
                <ul>
                    <li class='center'>Episodio:{this.state.film.episode_id}</li>
                    <li class='center'>Director:{this.state.film.director}</li>
                    <li class='center'>Productor:{this.state.film.producer}</li>
                    <li class='center'>Estreno:{this.state.film.release_date}</li>
                </ul>
            </div>  
            }
            
        </div>      
        
    );
}

}
export default App;
