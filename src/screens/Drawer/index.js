// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';

import Constants   from '../../global/Constants';
import CounterView from '../components/Counter';

@inject('App', 'Counter') @observer
export default class Drawer extends Component {
  render() {
    const { App, Counter } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Drawer
        </Text>

        <CounterView
          count={Counter.count}
          onPlus={() => Counter.onPlus()}
          onMinus={() => Counter.onMinus()}
        />

        <Button
          title={`Push new screen in Tab 1`}
          onPress={() => {
            // this is made for iOS based on this issue -> https://github.com/wix/react-native-navigation/issues/1143
            App.rootNavigator.push({
              screen: Constants.Screens.PUSHED_SCREEN.screen,
              title: 'Pushed Screen from Drawer'
            });
            // for Android you can use this.props.navigator.push({ ... })
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
