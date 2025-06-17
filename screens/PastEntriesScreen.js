import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dummyEntries = [
    { id: '1', date: '2025-06-14', mood: '😊', text: 'Had a pretty good day today...' },
    { id: '2', date: '2025-06-13', mood: '😐', text: 'Feeling kind of neutral overall...' },
    { id: '3', date: '2025-06-12', mood: '😔', text: 'Things were a bit rough today...' },
];

export default function PastEntriesScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>📜 Past Entries</Text>

            <FlatList
                data={dummyEntries}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.entryCard}
                        onPress={() => navigation.navigate('Journal Entry', { entryId: item.id })}
                    >
                        <Text style={styles.entryDate}>{item.date}</Text>
                        <Text style={styles.entryText}>
                            {item.mood} {item.text.slice(0, 40)}...
                        </Text>
                    </TouchableOpacity>
                )}
            />
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
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    entryCard: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
    },
    entryDate: {
        fontSize: 14,
        color: '#999',
        marginBottom: 4,
    },
    entryText: {
        fontSize: 16,
        color: '#333',
    },
});
