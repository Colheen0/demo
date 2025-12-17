import {View, TextInput, Button} from "react-native";
export default function Formulaire() {
    return(
        <View>
        <TextInput
        placeholder="Entrez votre Login"
        style={{ borderWidth: 1, padding: 8 }}
        />
        <TextInput
        placeholder="Entrez votre Mot de Passe"
        secureTextEntry={true}
        style={{ borderWidth: 1, padding: 8 }}
        />

        <Button title="Connexion"/>
    </View>
    
)};



