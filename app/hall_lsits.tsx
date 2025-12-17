import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ListItem from "@/components/lists";
import api from "../../services/api";

export default function HallLists() {
  // TODO: Récupérer les listes depuis l'API
  const [lists, setLists] = useState([
    { id: "1", name: "Courses" },
    { id: "2", name: "Travail" },
    { id: "3", name: "Maison" },
  ]);

  const handleDeleteList = (id: string) => {
    // TODO: Appel API pour supprimer
    setLists(lists.filter(list => list.id !== id));
  };

  const handleAddList = () => {
    // TODO: Ouvrir modal pour créer une nouvelle liste
    console.log("Créer une nouvelle liste");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Mes Listes</Text>
          <Text style={styles.subtitle}>{lists.length} liste(s)</Text>
        </View>

        <View style={styles.content}>
          {lists.length > 0 ? (
            lists.map((list) => (
              <ListItem
                key={list.id}
                id={list.id}
                name={list.name}
                onPress={() => {
                  // TODO: Navigation vers la liste détaillée
                  console.log("Ouvrir la liste:", list.name);
                }}
                onDelete={() => handleDeleteList(list.id)}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="list" size={64} color="#bdc3c7" />
              <Text style={styles.emptyText}>Aucune liste pour le moment</Text>
              <Text style={styles.emptySubtext}>Créez une liste pour commencer</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={handleAddList}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#7f8c8d",
  },
  content: {
    paddingTop: 8,
    paddingBottom: 100,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2c3e50",
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#95a5a6",
    marginTop: 8,
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#27ae60",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#27ae60",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
});