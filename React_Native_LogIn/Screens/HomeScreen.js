import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, TextInput, Button, View, Text, FlatList, SafeAreaView, Image} from 'react-native';

const axios = require('axios');

export class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state ={consulteApi:false, item:[]};
        
      }
    
      handlerBtn(){
        axios.get("https://simpsons-quotes-api.herokuapp.com/quotes",{params:{character:this.state.nombre}})
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
      
      handlerLogout=()=>{
        console.log("Logouthome");
     
      }

    render(){
        const Item = ({ item, onPress, style }) => (
            <>
            <Text style={styles.text}>Nombre: {item.character}</Text>
            <Text style={styles.text}>Frase: {item.quote}</Text>
            <Text style={styles.text}>Orientación de imagen: {item.characterDirection}</Text>
            <SafeAreaView style={styles.container}>
            <Image style={styles.tinyLogo} source={{uri: item.image}}/>
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
            <Image source={require('../img/home.jpg')} style={styles.mainImage}/>  
            <SafeAreaView style={styles.container}>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1,width:200 }}
            onChangeText={text => this.handlerText(text)}  
            />

            <Button
              onPress={this.handlerBtn.bind(this)}
              title="Buscar Personaje"
              color="#D4AF37"
              accessibilityLabel="Buscar Personaje"
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
      width: 400,
      height: 400,
    },
        mainImage:{
      width: 318,
      height: 159,
    },
    text:{
      color: "black",
      fontSize: 15,
      fontWeight: "bold",
      textAlign:"center",
    }
  });