import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Palm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    static navigationOptions = {
        headerTransparent: true,
        headerTintColor: 'white',
        title: '',
    }

    render() {
        return (
            <WebView
                source={{ uri: 'http://192.168.79.99/kantor/' }}
                style={{ marginTop: 0 }}
            />
        );
    }
}
