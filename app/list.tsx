import { Text, View, Button } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Todolist from "@/components/todolist";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 18, color:"blue"}}>Liste --- nom de Liste</Text>
      <PaperProvider>
        <Todolist/>
      </PaperProvider>

      <Button title="sauvegarder"/>
    </View>
  );
}

