import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todo</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        paddingTop: 35,
        color: "white",
        height: 100,
    },
    title: {
        textAlign: 'center',
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})