import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Title, Button } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import { globalStyles } from '../styles/styles';

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        const sendPromoNotification = async () => {
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Special Offer! ☕',
                    body: 'Get 20% off on your next coffee order. Limited time only!',
                },
                trigger: null, // Immediate notification
            });
        };

        sendPromoNotification();
    }, []);

    return (
        <View style={globalStyles.container}>
            <Title style={globalStyles.title}>Welcome to Starbucks Clone</Title>
            <Button
                mode="contained"
                style={globalStyles.button}
                onPress={() => navigation.navigate('Menu')}
            >
                Go to Menu
            </Button>
            <Button
                mode="contained"
                style={globalStyles.button}
                onPress={() => navigation.navigate('Cart')}
            >
                View Cart
            </Button>
        </View>
    );
};

export default HomeScreen;
