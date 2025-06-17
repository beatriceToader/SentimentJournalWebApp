import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function SignUpScreen({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>🧠 Create Account</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />

            <TouchableOpacity style={styles.checkboxContainer} onPress={() => setIsChecked(!isChecked)}>
                <Text style={styles.checkboxEmoji}>{isChecked ? '☑️' : '⬜️'}</Text>
                <Text style={styles.checkboxLabel}>I agree to the Terms & Conditions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, !isChecked && styles.disabledButton]} disabled={!isChecked}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.link}>Already have an account? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    checkboxLabel: {
        marginLeft: 8,
        color: '#555',
    },
    button: {
        backgroundColor: '#F25C5C',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    disabledButton: {
        backgroundColor: '#ddd',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    link: {
        color: '#888',
        textAlign: 'center',
    },
    checkboxEmoji: {
        fontSize: 20,
        marginRight: 8,
    },
});
