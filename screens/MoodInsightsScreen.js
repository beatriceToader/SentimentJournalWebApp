import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MoodInsightsScreen() {
    const [range, setRange] = useState('Week');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>📈 Mood Trends</Text>

            <View style={styles.toggleContainer}>
                {['Week', 'Month', 'Custom'].map((item) => (
                    <TouchableOpacity
                        key={item}
                        style={[styles.toggleButton, range === item && styles.selectedButton]}
                        onPress={() => setRange(item)}
                    >
                        <Text style={[styles.toggleText, range === item && styles.selectedText]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.chartPlaceholder}>
                <Text style={styles.chartText}>[Line Chart Here]</Text>
            </View>

            <View style={styles.chartPlaceholder}>
                <Text style={styles.chartText}>[Pie Chart Here]</Text>
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
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    toggleButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    selectedButton: {
        backgroundColor: '#F25C5C',
        borderColor: '#F25C5C',
    },
    toggleText: {
        color: '#333',
    },
    selectedText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    chartPlaceholder: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    chartText: {
        color: '#aaa',
        fontStyle: 'italic',
    },
});
