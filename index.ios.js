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
    ListView,
    } = React;

var REQUEST_URL = 'https://raw.githubusercontent.com/Jackey-Sparrow/hiApp-react-native/master/data/userList.json';

var hiAppReactNative = React.createClass({

    getInitialState: function () {
        return {
            userList: null,
            dataSource: new ListView.DataSource({
                rowHasChanged: function (row1, row2) {
                    return row1 !== row2;
                }
            }),
            loaded: false
        };
    },
    fetchData: function () {
        var that = this;
        fetch(REQUEST_URL).then(function (response) {
            return response.json();
        }).then(function (responseData) {
            that.setState({
                userList: responseData,
                dataSource: that.state.dataSource.cloneWithRows(responseData),
                loaded: true
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
                <Image
                    source={{uri:user.photoUrl}}
                    style={styles.thumbnail}
                    />
                <View style={styles.rightContainer}>
                    <Text>{user.userName}</Text>
                    <Text>{user.age}</Text>
                </View>
            </View>
        );
    },
    render: function () {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderUser}
                />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    rightContainer: {
        flex: 1,
        textAlign: 'center'
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
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    }
});

AppRegistry.registerComponent('hiAppReactNative', () => hiAppReactNative);
