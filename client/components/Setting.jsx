'use strict';

import React, { Component, Image,ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Dimensions from 'Dimensions';
const Setting = (backgroundColor = '#F5FCFF') => class extends Component {
  loginOut(){
    const { actions, assets } = this.props;

    actions.goLogin({
      value:true
    });
    actions.routes.login()();
  }
  render() {
    const { actions, assets } = this.props;
    const json = [{
      label:"姓名",
      value:"xxxx"
    },{
      label:"民族",
      value:"xxx"
    },{
      label:"身份证号",
      value:"8888888888888888"
    },{
      label:"家庭住址",
      value:"是范德萨范德萨发"
    }]

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let state = {
      dataSource:ds.cloneWithRows(json),
    };

    return (
      <View style={styles.container}>
        <Text style={styles.loginBtn} onPress={()=>this.loginOut()}>退出登录</Text>
      </View>
    );
  }
}

export default Setting

var styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"flex-end",
    flex:1
  },
  loginBtn:{
    overflow:"hidden",
    width:Dimensions.get("window").width,
    height:40,
    lineHeight:23,
    paddingLeft:5,
    paddingRight:5,
    paddingTop:2,
    paddingBottom:2,
    backgroundColor:"#ff0000",
    fontSize:14,
    color:"#ffffff",
    textAlign:"center",
    textAlignVertical:"center",
  },
});
