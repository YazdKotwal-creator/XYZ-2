import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase'
//import db from '../config.js'

export default class MembersScreen extends Component {
            render(){
            return(
            <View>
                style = {styles.container}
              <Image
                source={require("../assets/xyz-logo-1.png")}
                style={{width:200, height: 200}}/>
              <Text style={{textAlign: 'center', fontSize: 30}}>XYZ Registration Form</Text>
            
            <View>
            <Text style={styles.container}>Payment Options

            Cheque:
            In favour of XYZ FOUNDATION
            
            Bank transfer:
            Account Name: XYZ FOUNDATION
            Bank Name: KOTAK MAHINDRA BANK
            Account No: 6911934878
            IFSC Code: KKBK0000647
            Branch: Mumbai – Churchgate
            Account Type: Savings
            
            Please give your Transaction details to the volunteer after you have made the payment.
            
            https://docs.google.com/forms/d/e/1FAIpQLSeUih-Aog0U9H5DynWZS2sfTu8lhQCiScJBxTe5EchxOPTH1g/viewform?usp=sf_link
            </Text>
            </View>
            </View>
        )
    }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    }
  });