import React, { useState } from "react";
import { Text, TextInput, View, Button, FlatList, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper"; // ✅ Expo compatible

export default function Todolist() {
  const [todos, setTodos] = useState<{ text: string; checked: boolean }[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, color: "blue", marginBottom: 10 }}>To do List</Text>

      <TextInput
        placeholder="Entrez votre tâche"
        value={newTodo}
        onChangeText={setNewTodo}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />

      <Button onPress={handleAddTodo} title="Ajouter" />

      <FlatList
        data={todos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <Checkbox
              status={item.checked ? "checked" : "unchecked"}
              onPress={() => handleToggleTodo(index)}
            />

            <Text
              style={{
                flex: 1,
                marginLeft: 10,
                textDecorationLine: item.checked ? "line-through" : "none",
              }}
            >
              {item.text}
            </Text>

            <TouchableOpacity onPress={() => handleDeleteTodo(index)}>
              <Text style={{ margin: 10, color: "red" }}>Effacer</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
