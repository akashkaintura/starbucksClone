import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { globalStyles } from "../styles/styles";
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in:", userCredential.user);
            navigation.navigate("Home");
        } catch (error) {
            console.error("Login error:", error.message);
        }
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Login to Starbucks Clone</Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
