/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Introduction = [
  {
    name:'Jackey',
    age:26
  }
];

var hiAppReactNative = React.createClass({
  render: function() {
    var introduction = Introduction[0];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome!
        </Text>
        <Text style={styles.instructions}>
          {introduction.name}
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('hiAppReactNative', () => hiAppReactNative);
