import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function EntryScreen({ route }) {
    const { entryId } = route.params || {}; // passed from PastEntriesScreen

    // Dummy data
    const entry = {
        id: entryId || '1',
        date: '2025-06-14',
        mood: '😊',
        sentiment: '90% Positive',
        text: 'Today was amazing! I felt productive and connected with friends.',
    };

    const handleEdit = () => {
        Alert.alert('Edit', 'Edit functionality will be implemented later.');
    };

    const handleDelete = () => {
        Alert.alert('Delete', 'Delete functionality will be implemented later.');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{entry.date}</Text>
            <Text style={styles.sentiment}>{entry.mood} Sentiment: {entry.sentiment}</Text>
            <Text style={styles.text}>{entry.text}</Text>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    date: {
        fontSize: 14,
        color: '#999',
        marginBottom: 4,
    },
    sentiment: {
        fontSize: 16,
        marginBottom: 12,
    },
    text: {
        fontSize: 18,
        marginBottom: 24,
        color: '#333',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        backgroundColor: '#f2b644',
        padding: 14,
        borderRadius: 8,
        flex: 1,
        marginRight: 10,
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#f25c5c',
        padding: 14,
        borderRadius: 8,
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
