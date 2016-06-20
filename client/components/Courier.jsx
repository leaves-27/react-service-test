'use strict';

import React, { Component, Image,ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Master = (backgroundColor = '#F5FCFF') => class extends Component {
  lookNotice(){
    const {actions} = this.props;
    actions.routes.notice()();
  }
  goOrder(){
    const {actions} = this.props;
    actions.routes.inputOrder()();
  }
  goSet(){
    const {actions} = this.props;
    actions.routes.setting()();
  }
  render() {
    const { actions, assets } = this.props;
    const json = [{
      label:"快递公司",
      value:"联邦国际快递"
    },{
      label:"网点",
      value:"杭州市千岛湖村"
    },{
      label:"电话",
      value:"+86  18857152332"
    },{
      label:"姓名",
      value:"董珂"
    }]
    const notice = {
      id:"11",
      title:"公安局最新规定",
      content:"国家邮政总局表示国家邮政总局表示国家邮政总局表示国家邮政总局表示国家邮政总局表示国家邮政总局表示国家邮政总局表示国家邮政总局表示"
    }

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
        <View>
          <Text style={styles.notice} onPress={()=>this.lookNotice()}>公告：title</Text>
        </View>
        <View style={styles.loginBtnBox}>
          <Text style={styles.loginBtn} onPress={()=>this.goOrder()}>揽件</Text>
        </View>
        <View style={styles.loginBtnBox}>
          <Text style={styles.loginBtn} onPress={()=>this.goSet()}>设置</Text>
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
  notice:{
    marginTop:10,
    fontSize:12,
    color:"#666",
    textAlign:"center",
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
