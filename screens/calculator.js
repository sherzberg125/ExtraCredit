//https://github.com/aldroydzito/calculator

import React, { Component } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';

import Display from '../src/components/Display'
import Buttons from '../src/components/Buttons'
import colors from '../src/utils/colors';
import Button from '../src/components/Button'

 class Calculator extends Component {
  state = {
    display: '',
    result: ''
  }

  handleOperation = operation => {
    if (operation === 'C') {
      this.setState({
        display: '',
        result: ''
      })
    }
    else if(operation === '=') {
      this.setState({
        display: this.state.result,
        result: ''
      })
    }
    else {
      const display = this.state.display + operation
      let result = this.state.result
      try {

        let fixedOperation = display.split('×').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        fixedOperation = fixedOperation.split(',').join('.')

        result = new String(eval(fixedOperation)).toString()

      }catch(e) {}
      this.setState({
        display,
        result
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Display state={this.state} />
        <Buttons operation={this.handleOperation} />
        <Button 
          title = 'Home' 
          onPress = {() => 
          this.props.navigation.navigate('Home')
          } 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.darker,
  },
});
export default Calculator;
