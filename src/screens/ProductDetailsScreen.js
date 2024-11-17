import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title, Text, Button, Card } from 'react-native-paper';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { globalStyles } from "../styles/styles";

const ProductDetailsScreen = ({ route, navigation }) => {
    const { item } = route.params;

    const addToCart = async () => {
        try {
            await addDoc(collection(db, "cart"), {
                productId: item.id,
                name: item.name,
                price: item.price,
            });
            navigation.navigate("Cart");
        } catch (error) {
            console.error("Error adding to cart:", error.message);
        }
    };

    return (
        <View style={globalStyles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <Title style={globalStyles.title}>{item.name}</Title>
                    <Text style={styles.price}>${item.price}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Button
                        mode="contained"
                        style={globalStyles.button}
                        onPress={addToCart}
                    >
                        Add to Cart
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "100%",
        padding: 16,
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
        borderRadius: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00704A",
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: "#555",
        marginBottom: 16,
    },
});

export default ProductDetailsScreen;
