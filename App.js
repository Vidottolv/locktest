import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity }from 'react-native'
import Slider from '@react-native-community/slider'

export default function App(){
  const[size, setSize] = useState(10)


  return (
    <View style={styles.container}>
    <Image
    source={require("./src/assets/logo.png")} 
    style={styles.logo}
    />
    <Text style={styles.title}>{size} Caracteres</Text>
    
    <View style={styles.area}>
    <Slider
      style={{height:50}}
      minimumValue={6}
      maximumValue={20}
      maximumTrackTintColor="#FF0000"
      minimumTrackTintColor="#000"
      thumbTintColor="#392de9"
      value={size}
      onValueChange={(value) => setSize(value) }
    />
    </View>
    
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Gerar Senha</Text>
    </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#F3F3FF",
    justifyContent:'center', alignItems:'center'
  },
  logo:{
    marginBottom:60,
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width:"80%",
    backgroundColor: "#FFF",
    borderRadius:8,
    padding:8,
  },
  button:{
    backgroundColor:"#392de9",
    width:"80%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    marginBottom:18
  },
  buttonText:{
    color:"#FFF",
    fontSize:20,
  }
})