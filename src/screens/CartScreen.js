import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, Button, Title, Text } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { globalStyles } from '../styles/styles';

const CartScreen = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const querySnapshot = await getDocs(collection(db, 'cart'));
            const items = querySnapshot.docs.map(doc => doc.data());
            setCartItems(items);
        };

        fetchCartItems();

        const sendCartReminder = async () => {
            if (cartItems.length > 0) {
                await Notifications.scheduleNotificationAsync({
                    content: {
                        title: 'Don’t forget your cart! 🛒',
                        body: `You have ${cartItems.length} items waiting in your cart.`,
                    },
                    trigger: { seconds: 10 }, // Remind after 10 seconds
                });
            }
        };

        sendCartReminder();
    }, [cartItems]);

    return (
        <View style={globalStyles.container}>
            <Title style={globalStyles.title}>Cart</Title>
            <FlatList
                data={cartItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Card style={globalStyles.card}>
                        <Card.Content>
                            <Text style={globalStyles.listTitle}>{item.name}</Text>
                            <Text style={globalStyles.listText}>${item.price}</Text>
                        </Card.Content>
                    </Card>
                )}
            />
            <Button mode="contained" onPress={() => navigation.navigate('Checkout')}>
                Proceed to Checkout
            </Button>
        </View>
    );
};

export default CartScreen;
