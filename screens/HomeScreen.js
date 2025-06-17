import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    const [entry, setEntry] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>👋 Welcome back!</Text>
            <Text style={styles.subtitle}>How are you feeling today?</Text>

            <TextInput
                style={styles.textArea}
                placeholder="Write your mood or thoughts..."
                value={entry}
                onChangeText={setEntry}
                multiline
                numberOfLines={6}
            />

            <TouchableOpacity style={styles.analyzeButton}>
                <Text style={styles.buttonText}>Analyze</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Past Entries')}>
                <Text style={styles.linkText}>View Past Entries</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        textAlignVertical: 'top',
        marginBottom: 20,
    },
    analyzeButton: {
        backgroundColor: '#F25C5C',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    linkButton: {
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    linkText: {
        color: '#888',
    },
});
