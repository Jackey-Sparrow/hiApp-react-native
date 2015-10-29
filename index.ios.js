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
    Image,
    } = React;

var REQUEST_URL = 'https://raw.githubusercontent.com/Jackey-Sparrow/hiApp-react-native/master/data/userList.json';

var hiAppReactNative = React.createClass({
    getInitialState: function () {
        return {
            userList: null
        };
    },
    fetchData: function () {
        var that = this;
        fetch(REQUEST_URL).then(function (response) {
            return response.json();
        }).then(function (responseData) {
            that.setState({
                userList: responseData
            });
        }).done();
    },
    componentDidMount: function () {
        this.fetchData();
    },
    renderLoadingView: function () {
        return (
            <View style={styles.container}>
                <Text>loading...</Text>
            </View>
        );
    },
    renderUser: function (user) {
        return (
            <View style={styles.container}>
                <Image source={{uri:user.photoUrl}}/>
                <View style={styles.rightContainer}>
                    <Text>{user.userName}</Text>
                    <Text>{user.age}</Text>
                </View>
            </View>
        );
    },
    render: function () {
        if(!this.state.userList){
            return this.renderLoadingView();
        }

        var user = this.state.userList[0];
        return this.renderUser(user);
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
