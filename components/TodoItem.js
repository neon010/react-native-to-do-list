import React from 'react';
import { StyleSheet, View,Text,  TouchableOpacity } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"

export default function TodoItem({item, pressHandler}){
    return (
        <TouchableOpacity 
        onPress={()=> {
        console.log('Press')
        pressHandler(item.key)}}
        >
            <View style={styles.item}>
                <Text>{item.text}</Text>
                <MaterialIcons name="delete" size={20} color="red"/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10
    }
})