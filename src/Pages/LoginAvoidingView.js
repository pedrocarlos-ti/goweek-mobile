import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { View,
        Text,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        KeyboardAvoidingView,
        Keyboard,
        Platform
        } from 'react-native';

export default class Login extends Component {

    state = {
        keyboardAvoidingViewKey: 'keyboardAvoidingViewKey',
    }

    componentDidMount() {
        // using keyboardWillHide is better but it does not work for android
        this.keyboardHideListener = Keyboard.addListener(Platform.OS === 'android' ? 'keyboardDidHide': 'keyboardWillHide', this.keyboardHideListener.bind(this));
    }

    componentWillUnmount() {
        this.keyboardHideListener.remove()
    }

    static navigationOptions = {
        header : null
    }

    handleInputChange = username => {
        this.setState({ username });
    }

    keyboardHideListener() {
        this.setState({
            keyboardAvoidingViewKey:'keyboardAvoidingViewKey' + new Date().getTime()
        });
    }
    

    render() {
        let { keyboardAvoidingViewKey } = this.state;

        return (
            <KeyboardAvoidingView style={styles.container} behavior="height" key={keyboardAvoidingViewKey}>
                <View style={styles.content}>
                <View>
                    <Icon name="twitter" size={64} color="#4BB0EE" />
                </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do usuário"
                        value={this.state.username}
                        onChangeText={this.handleInputChange}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#FFF"
    },
    content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
    },
    input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 30
    },
    button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 10,
    backgroundColor: "#4BB0EE",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
    },
    buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
    }
});