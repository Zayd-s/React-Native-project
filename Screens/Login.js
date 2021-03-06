import React, {Component} from 'react'
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, Image, SafeAreaView} from 'react-native'


class LoginScreen extends Component{
  render(){
    const navigation = this.props.navigation;
    return(
    <SafeAreaView style={ styles.container }>
      <View style={{height: 100,}}>
        <Image style={styles.CoffeePic}
          resizeMode="cover"
          source={{uri: 'https://www.pngkey.com/png/full/22-225874_coffee-logo-png-vector-cafe.png'}}
        />
      </View>

        <TextInput
          style={styles.EmailBox}
          placeholder="Email">
        </TextInput>

        <TextInput
          style={styles.PasswordBox}
          placeholder="Password">
        </TextInput>

        <TouchableOpacity
          style={styles.LoginBox}>
          <Text
            style={styles.LoginText}>
            Login
          </Text>
        </TouchableOpacity>

        <Text 
          style={styles.SignupText}>
            Don't have an account? <Text style={styles.SignupText2}
              onPress={() => navigation.navigate('Signup')}>
              Sign up 
            </Text>
        </Text>

        <TouchableOpacity
          style={styles.Skipbutton}
          onPress={() => navigation.navigate('Home')}>
          <Text style=
          {styles.SkipText}> Skip to Homepage 
          </Text>
        </TouchableOpacity>
          
        
    </SafeAreaView>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    paddingHorizontal: 10,
    top: -50,
  },
  CoffeePic: {
    width: 150,
    height: 160,
    bottom: 80,
    alignSelf: "center",
  },
  EmailBox: {
    backgroundColor: "#dfdfdf",
    padding: 5,
    alignSelf: "center",
    width : "75%",
    borderRadius: 10,
  },
  PasswordBox: {
    backgroundColor: "#dfdfdf",
    padding: 5,
    alignSelf: "center",
    width: "75%",
    borderRadius: 10,
    top: 25,
  },
  LoginBox: {
    backgroundColor: "#f08200",
    padding: 10,
    alignSelf: "center",
    width : "75%",
    borderRadius: 10,
    top: 50,
    alignItems: "center",
  },
  LoginText: {
    color: "white",
    fontWeight: "bold",
  },
  SignupText: {
    alignSelf: "center",
    top: 100,
  },
  SignupText2: {
    //alignSelf: "center",
    //top: 160,
    fontWeight: "bold",
    color: "#f08200",
  },
  Skipbutton: {
    backgroundColor: "#f08200",
    //borderwidth : 1,
    height : 35,
    width : "45%",
    borderRadius: 20,
    paddingVertical: 4,
    alignSelf: "center",
    alignItems: "center",
    top: 150
  },
  SkipText: {
    fontSize: 16,
    fontWeight: "bold",
    //alignSelf: "center",
    color: "white",
  }
});

export default LoginScreen;


//Add SafeAreaView?