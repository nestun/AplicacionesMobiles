import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';



const axios = require('axios');

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: "Value",
      done: false,
      film: []
    }
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  handlerbtn(){
            var id = this.state.value;
            axios.get("https://swapi.dev/api/films/" + id)
            .then(film => {
              if (film.data != false) { 
                this.setState({
                 
                  done:true,
                  film: film.data
                })
                console.log(this.state);
                console.log(this.state.film.episode_id);
              }
            })
            .catch(error => {
              console.log(error);
            });
           
          
  }

  updateInputValue(evt) {

    this.setState ({id: evt.target.value});

}
  handlerTxt(text){
    var id = text;
    this.setState({ value: id });
           }

    render(){

      if(this.state.done !== true){
        return (

          <View style={styles.container}>
          <Image resizeMode="contain" style={styles.formatoImagen} source={require('./image/logo.png')}/>
          <Text style={styles.titulo}>Busca una Pelicula del 1 al 6</Text>
          <TextInput
            style={{
              height: 40,
              width: 250,
              borderColor: 'white',
              borderWidth: 1,
              backgroundColor: '#ffffff'
            }}
            placeholder='Ingrese número...'
            onChangeText={this.handlerTxt.bind(this)}
          />
           <Button title="Buscar" style={styles.button}  onChange={ this.updateInputValue.bind(this)} onPress={this.handlerbtn.bind(this)} placeholder='numero de pelicula' />
        </View>
      )
      } else {
        return (
          <View style={styles.container}>
            <Image resizeMode="contain" style={styles.formatoImagen2} source={require('./image/peliculas.jpg')}/>
            <Text style={styles.titulo}>Busca otra pelicula</Text>
            <Text style={styles.titulo}>Del 1 al 6</Text>
            <TextInput
              style={{
                height: 40,
                width: 250,
                borderColor: 'white',
                borderWidth: 1,
                color: '#ffebee',
                marginBottom: 10,
              }}
              placeholder='Ingrese número'
              onChangeText={this.handlerTxt.bind(this)}
            />
            <Button title="Buscar" style={styles.button}  onChange={ this.updateInputValue.bind(this)} onPress={this.handlerbtn.bind(this)} placeholder='numero de pelicula' />
            
              <Text style={{color: '#D4AF37', fontSize: 25, margin: 5}}>Título: {this.state.film.title} </Text>
              <Text style={{color: '#D4AF37', fontSize: 20, margin: 5}}>Episodio: {this.state.film.episode_id} </Text>
              <Text style={{color: '#D4AF37', fontSize: 20, margin: 5}}>Estreno: {this.state.film.release_date} </Text>
              <Text style={{color: '#D4AF37', fontSize: 20, margin: 5}}>Director: {this.state.film.director} </Text>
              <Text style={{color: '#D4AF37', fontSize: 20, margin: 5}}>Productor: {this.state.film.producer} </Text>          
                   
          </View>
        );
      }
  }
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  titulo: {
    fontSize: 20,
    justifyContent: 'center',
    color: '#ffffff',
    marginTop: 50,
    
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#D4AF37',
    borderColor: '#D4AF37',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  formatoImagen1: {

    flex: 0.5,
  },
  
  formatoImagen2: {
    flex: 0.8,
    
    resizeMode: 'contain' 
  },

});
