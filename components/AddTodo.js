import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';

function AddTodo({submitHandler}){
    const [text, setText] = useState("")
    const changeHandler = (val) => setText(val);
    
    return (
        <View>
            <TextInput 
            placeholder="Add Todo Item..."
            style={styles.textInput} 
            onChangeText={changeHandler} />
            <Button 
            onPress={() => submitHandler(text)}
            title="Add Todo Item"
            style={styles.button}/>
        </View>
    )
}
const styles = StyleSheet.create({
    textInput: {
        borderColor:'black',
        padding: 10,
        borderWidth:2,
        borderRadius:5,
        marginBottom: 10
    }
})
export default AddTodo;