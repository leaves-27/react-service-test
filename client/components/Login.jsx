'use strict';

import React,{ Component,ListView,Image, StyleSheet, Text,TextInput, TouchableHighlight, View } from 'react-native';
import Dimensions from 'Dimensions';

const USER = {
  name:"",
  password:""
}

const Login  = (backgroundColor = '#F5FCFF') => class extends Component {
  constructor(props){
    super(props)
  }
  goLogin(){
    const {actions} = this.props;

    if(!this.checkLoginInfo()){
      return;
    }

    actions.goLogin({
      value:true
    })
    actions.routes.courier()();

    // fetch(url).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(e => console.log("Oops, error", e))

  }
  checkLoginInfo(){
    if(!USER.name){
      return false;
    }

    if(!USER.password){
      return false;
    }
    return true;
  }
  updateName(event){
    USER.name = event.nativeEvent.text
  }
  updatePassword(event){
    USER.password = event.nativeEvent.text
  }
  render(){
    
    return (
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <View>
            <TextInput style={styles.textInput} placeholder="请输入用户名" onChange={this.updateName}/>
            <TextInput style={styles.textInput} placeholder="请输入密码" password="true" onChange={this.updatePassword}/>
          </View>
          <View style={styles.loginBtnBox}>
            <Text style={styles.loginBtn}  onPress={()=>this.goLogin()}>登录</Text>
          </View>
        </View>
      </View>
    );
  }
}


export default Login;