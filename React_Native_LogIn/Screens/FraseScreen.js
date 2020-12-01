import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, TextInput, Button, View, Text, FlatList, SafeAreaView, Image} from 'react-native';

const axios = require('axios');


export class InfoScreen extends Component {
    constructor(props){
        super(props);
        this.state ={consulteApi:false, item:[]};
        
      }
    
      handlerBtn(){
        axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
        .then(response=>{
          console.log(response);
         this.setState(() => {return {consulteApi: true, item: response.data}});
        })
        .catch(error=>{
          console.log(error);
        });
        console.log("Click");
      }
    
      handlerText(text){
        this.setState({nombre: text});
      }
    

    render(){
        const Item = ({ item, onPress, style }) => (
            <>
            <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Frase:</Text>
            <Text style={styles.textb}> {item.quote}</Text>
            <Text style={styles.text}>Personaje:</Text>
            <Text style={styles.textb}> {item.character}</Text>
            </SafeAreaView>
            </>
        );
        const renderItem = ({ item }) => {
          return (
            <Item
              item={item}
            />
          );
        };
        return(
            <>
            <View style={styles.container}>
            <Image source={require('../img/fondo_frases.jpg')} style={styles.mainImage}/>
            <SafeAreaView style={styles.container}>  
            <Button
              onPress={this.handlerBtn.bind(this)}
              title="Frases Aleatorias "
              color="#D4AF37"
              accessibilityLabel="Learn more about this purple button"
            />
            </SafeAreaView> 
          </View>
          
          <SafeAreaView style={styles.container}>
          <FlatList
              data={this.state.item}
              renderItem={renderItem}
              keyExtractor={(item) => item.character}
            />
          </SafeAreaView>
          </>
        );
    }
    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `#f0f8ff`,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 155,
      height: 400,
    },
    mainImage:{
      width: 400,
      height: 200,
    },
    text:{
      color: "black",
      fontSize: 15,
      fontWeight: "bold",
      textAlign:"center",
    },
    textb:{
      color: "black",
      fontSize: 15,
      textAlign:"center",
    }
  });