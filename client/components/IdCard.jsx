'use strict';

import React, { Component, Image,ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Master = (backgroundColor = '#F5FCFF') => class extends Component {
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
      <View style={[styles.container, { backgroundColor }]}>
        <ListView
          dataSource={state.dataSource}
          renderRow={
            (rowData) => 
              <View style={styles.listview}>
                <View style={styles.leftBar} >
                  <Text style={styles.leftBarText,styles.text} >{rowData.label}</Text>
                </View> 
                <View style={styles.main} >
                  <Text style={styles.text,styles.mainText} >{rowData.value}</Text>
                </View>
              </View>
          }
        />
        <View style={styles.loginBtnBox}>
          <Text style={styles.loginBtn}>确定</Text>
          <Text style={styles.loginBtn}>重新识别</Text>
        </View>
      </View>
    );
  }
}

export default Master

var styles = StyleSheet.create({
  container:{
    backgroundColor:"#ffffff"
  },
  listview:{
    flexDirection:'row',
    flex:2,
    borderColor:"#ccc",
    borderBottomWidth:1,
    borderStyle:"solid",
    paddingLeft:10,
    paddingRight:10,
  },
  leftBar:{
    width:100,
    height:40,
    borderRadius:5,
    marginTop:10,
    alignItems:"center",
    justifyContent:"center"
  },
  main:{
    height:40,
    flex:1,
    justifyContent:"center",
    paddingLeft:5,
  },
  mainText:{
    color:"#000",
  },
  text: {
    color: '#666',
    fontSize:12,
  },
  leftBarText:{
    textAlign:"left",
    justifyContent:"flex-start",
  },
  loginBtnBox:{
    marginTop:50,
    alignItems:"center",
    justifyContent:"center",
  },
  loginBtn:{
    overflow:"hidden",
    width:200,
    height:40,
    lineHeight:23,
    paddingLeft:5,
    paddingRight:5,
    paddingTop:2,
    paddingBottom:2,
    borderRadius:10,
    backgroundColor:"#ff0000",
    fontSize:14,
    color:"#ffffff",
    textAlign:"center",
    textAlignVertical:"center",
  },
});
