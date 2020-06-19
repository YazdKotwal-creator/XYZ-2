import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase'
export default class HomeScreen extends React.Component {

  render(){
      return(
        <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
        <View>
          <Image
            source={require("../assets/xyz-logo-1.png")}
            style={{width:200, height: 200}}/>
        
      <View>
        <TouchableOpacity
           style={[styles.button,{marginBottom:20, marginTop:20}]}
           onPress = {()=>{
           }}
           >
           <Text style={styles.buttonText}>Members</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button}
           >
           <Text style={styles.buttonText}>Volunteers</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button}
           >
           <Text style={styles.buttonText}>Seniors</Text>
         </TouchableOpacity>

           <Text style={styles.container}>Xtremely Young Zoroastrians (XYZ) is an organisation aimed to promote togetherness and camaraderie within the youngsters of the Zoroastrian Community between the ages of 5 and 15 years.</Text>
      </View>
      </View>
       </KeyboardAvoidingView>
      )
    }
  }

  const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
   profileContainer:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
   KeyboardAvoidingView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  })
  