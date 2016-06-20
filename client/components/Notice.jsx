'use strict';

import React, { Component, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Notice = (backgroundColor = '#F5FCFF') => class extends Component {
  render() {
    const { actions, assets } = this.props;

    return (
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.title} >Push detail view</Text>
        <Text style={styles.content}>
                push detail viewPush detail viewPush detail viewPush detail viewPush detail viewPush detail viewPush detail viewPush detail view。
                push detail viewPush detail viewPush detail viewPush detail viewPush detail viewPush detail viewPush detail viewPush detail view。
        </Text>
      </View>
    );
  }
}

export default Notice

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1
  },
  title: {
    marginTop:20,
    fontSize:14,
    color:"#000"
  },
  content: {
    marginTop:20,
    color: '#666',
    fontSize:12,
  },
});
