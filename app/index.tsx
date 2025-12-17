import Formulaire from "@/components/formulaire";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 18, color:"blue"}}>Connexion</Text>
      <Formulaire></Formulaire>
    </View>
  );
}
