import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    // General container style
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    // Title style
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20,
    },
    // Input style for TextInput
    input: {
        marginBottom: 16,
    },
    // Button style for React Native Paper buttons
    button: {
        marginTop: 16,
        backgroundColor: '#00704A',
    },
    // Card style for React Native Paper cards
    card: {
        marginBottom: 16,
        padding: 16,
    },
    // List title and text
    listTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    listText: {
        fontSize: 16,
        color: '#555',
    },
});
