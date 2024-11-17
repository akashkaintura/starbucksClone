import React from 'react';
import { View } from 'react-native';
import { Title, Button } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import { globalStyles } from '../styles/styles';

const CheckoutScreen = ({ navigation }) => {
    const sendOrderNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: 'Order Confirmed! 🎉',
                body: 'Your Starbucks order will be ready soon.',
                data: { screen: 'Menu' }, // Optional: Use this to navigate based on notification
            },
            trigger: { seconds: 1 }, // Notify after 1 second
        });
    };

    return (
        <View style={globalStyles.container}>
            <Title style={globalStyles.title}>Thank you for your order!</Title>
            <Button
                mode="contained"
                style={globalStyles.button}
                onPress={() => {
                    sendOrderNotification();
                    navigation.navigate('Menu');
                }}
            >
                Go to Menu
            </Button>
        </View>
    );
};

export default CheckoutScreen;
