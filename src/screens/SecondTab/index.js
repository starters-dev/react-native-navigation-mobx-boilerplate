// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';

import NavButtons  from '../../global/NavButtons';
import NavBar      from '../../global/NavBar';
import Constants   from '../../global/Constants';
import CounterView from '../components/Counter';

@inject('Counter') @observer
export default class SecondTab extends Component {
  static navigatorButtons = NavButtons.WithSideMenu;
  static navigatorStyle   = NavBar.Default;

  constructor(props: {}) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event: {}) => {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
  }

  render() {
    const { Counter } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Second Tab Counter
        </Text>

        <CounterView
          count={Counter.count}
          onPlus={() => Counter.onPlus()}
          onMinus={() => Counter.onMinus()}
        />

        <Button
          title={`Push new screen`}
          onPress={() => {
            this.props.navigator.push({
              screen: Constants.Screens.PUSHED_SCREEN.screen,
              title: 'Pushed Screen'
            });
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
