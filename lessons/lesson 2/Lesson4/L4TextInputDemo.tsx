import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

const L4TextInputDemo = () => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (text) => {
        setInputText(text);
    };

    const handleButtonPress = () => {
        Alert.alert("Input Text", inputText);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                onChangeText={handleInputChange}
            />
            <Button title="Submit" onPress={handleButtonPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        width: '100%',
    },
});

export default L4TextInputDemo;
