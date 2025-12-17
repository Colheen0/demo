import UserInfo from "@/components/infos";

export default function Compte() {
  // TODO: Récupérer les données du compte depuis l'API
  return (
    <UserInfo
      name="Jean Dupont"
      login="jean@exemple.com"
      password="motdepasse123"
      nbLists={5}
      nbTasks={23}
    />
  );
}