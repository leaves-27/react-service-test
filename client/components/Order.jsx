'use strict';

import React, { Component, Image,ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Master = (backgroundColor = '#F5FCFF') => class extends Component {
  render() {
    const { actions, assets } = this.props;

    const json = [{
      id:"11",
      src:"../../assets/pic02.png"
    },{
      id:"12",
      src:"../../assets/pic02.png"
    }]

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    let state = {
      dataSource:ds.cloneWithRows(json),
    };

    return (
      <View style={[styles.container]}>
        <View style={styles.item}>
          <Text style={[styles.title]}>物品信息</Text>
          <View style={styles.desc}>
            <View style={styles.leftBar} >
              <Text style={styles.leftBarText,styles.text}>快递单号</Text>
            </View> 
            <View style={styles.main} >
              <Text style={styles.text,styles.mainText} >2132132131231</Text>
            </View>
            <View>
              <Image source={require('../../assets/pic01.png')}></Image>
            </View>
          </View>
          <View>
            <View style={styles.leftBar} >
              <Text style={styles.leftBarText,styles.text}>物品类型</Text>
            </View> 
            <View style={styles.main} >
              <Text style={styles.text,styles.mainText} ></Text>
            </View>
            <View>
              <Image source={require('../../assets/pic01.png')}></Image>
            </View>
          </View>
          <View>
            <View style={styles.leftBar} >
              <Text style={styles.leftBarText,styles.text}>物品数量</Text>
            </View> 
            <View style={styles.main} >
              <Text style={styles.text,styles.mainText} >111</Text>
            </View>
          </View>
          <View>
            <View style={styles.leftBar} >
              <Text style={styles.leftBarText,styles.text}>物品照片</Text>
            </View> 
            <ListView
              dataSource={state.dataSource}
              renderRow={
                (rowData) => 
                  <Image source={{uri:rowData.src}} />
              }
            />
          </View>
        </View>
        <View>
          <Text>寄件人信息</Text>
          <View style={styles.listview}>
            <View style={styles.leftBar} >
              <Text style={styles.leftBarText,styles.text}>寄件人姓名</Text>
            </View> 
            <View style={styles.main} >
              <Text style={styles.text,styles.mainText}>宋江</Text>
            </View>
            <View>
              <Image source={require('../../assets/pic01.png')}></Image>
            </View>
          </View>
          <View style={styles.listview}>
            <View style={styles.leftBar} >
              <Text style={styles.leftBarText,styles.text}>寄件人位置</Text>
            </View> 
            <View style={styles.main} >
              <Text style={styles.text,styles.mainText} ></Text>
            </View>
          </View>
          <View style={styles.listview}>
            <View style={styles.leftBar} >
              <Text style={styles.leftBarText,styles.text}>寄件人具体位置</Text>
            </View> 
            <View style={styles.main} >
              <Text style={styles.text,styles.mainText} ></Text>
            </View>
          </View>
          <View style={styles.listview}>
            <View style={styles.leftBar} >
              <Text style={styles.leftBarText,styles.text}>寄件人电话</Text>
            </View> 
            <View style={styles.main} >
              <Text style={styles.text,styles.mainText} ></Text>
            </View>
          </View>
        </View>
        <View style={styles.loginBtnBox}>
          <Text style={styles.loginBtn}>保存</Text>
        </View>
      </View>
    );
  }
}

export default Master

var styles = StyleSheet.create({
  container:{
    backgroundColor:"#00ff00",
    flex:3
  },
  item:{
    
  },
  title:{
    height:40,
    lineHeight:40,
    backgroundColor:"#ccc",
    borderTopWidth:1,
    borderTopColor:"#999",
    borderStyle:"solid",
    textAlignVertical:"center",
  },
  desc:{
    height:50,
    borderTopWidth:1,
    borderTopColor:"#999",
    borderStyle:"solid",
    textAlignVertical:"center",
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
