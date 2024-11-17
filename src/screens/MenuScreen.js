import React from 'react';
import { View } from 'react-native';
import { Card, Button, Title } from 'react-native-paper';
import { globalStyles } from "../styles/styles";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={globalStyles.container}>
            <Title style={globalStyles.title}>Welcome to Starbucks Clone</Title>
            <Card style={globalStyles.card}>
                <Card.Content>
                    <Button mode="contained" onPress={() => navigation.navigate("Menu")}>
                        Go to Menu
                    </Button>
                </Card.Content>
            </Card>
            <Card style={globalStyles.card}>
                <Card.Content>
                    <Button mode="contained" onPress={() => navigation.navigate("Cart")}>
                        View Cart
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
};

export default HomeScreen;
