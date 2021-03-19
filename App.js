import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header"
import TodoItem from "./components/TodoItem"
import AddTodo from "./components/AddTodo"

export default function App() {

  const [todo, setTodo] = useState([
    {text:"making tea", key:"1"},
    {text:"buying grocery", key:"2"},
    {text:"study", key:"3"},
    {text:"playing", key:"4"},
    {text:"building game", key:"5"},
    {text:"study react native", key:"6"}
  ])

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodo((prevTodo) => {
        return [
          {text:text, key:Math.random().toString()},
          ...prevTodo
        ]
      })
    }else{
      Alert.alert("OPPS", "Todo item must be three character long", [
        {text:"Close", onPress: () =>console.log("alert close")}
      ])
    }
  }

  const pressHandler = (key) => {
    setTodo((prevTodo) =>{
      return prevTodo.filter(todo => todo.key !== key)
    })
  }
  

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('keyboard dissmiss')
      }}
    >
        <View style={styles.container}>
          <Header/>
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList
              data={todo}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
              />
            </View>
          </View>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"#fff"
  },
  content:{
    padding: 20,
    marginTop: 10
  },
  list: {
    marginTop: 10
  }
});
