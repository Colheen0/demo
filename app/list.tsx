import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TaskItem from "@/components/task";

export default function List() {
  // TODO: Récupérer la liste et les tâches depuis l'API
  const [listName] = useState("Courses");
  const [tasks, setTasks] = useState([
    { id: "1", name: "Acheter du lait", completer: false },
    { id: "2", name: "Œufs", completer: true },
    { id: "3", name: "Pain", completer: false },
  ]);

  const handleToggleTask = (id: string, completer: boolean) => {
    // TODO: Appel API pour mettre à jour
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completer } : task
    ));
  };

  const handleUpdateTask = (id: string, newName: string) => {
    // TODO: Appel API pour mettre à jour
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, name: newName } : task
    ));
  };

  const handleDeleteTask = (id: string) => {
    // TODO: Appel API pour supprimer
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleAddTask = () => {
    // TODO: Ouvrir modal pour créer une nouvelle tâche
    console.log("Créer une nouvelle tâche");
  };

  const completedCount = tasks.filter(t => t.completer).length;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="chevron-back" size={28} color="#3498db" />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.title}>{listName}</Text>
            <Text style={styles.subtitle}>
              {completedCount}/{tasks.length} tâche(s) complétée(s)
            </Text>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0}%` }
              ]} 
            />
          </View>
        </View>

        <View style={styles.content}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                name={task.name}
                completer={task.completer}
                onToggle={(completer) => handleToggleTask(task.id, completer)}
                onUpdate={(newName) => handleUpdateTask(task.id, newName)}
                onDelete={() => handleDeleteTask(task.id)}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Ionicons name="checkmark-circle" size={64} color="#bdc3c7" />
              <Text style={styles.emptyText}>Aucune tâche pour le moment</Text>
              <Text style={styles.emptySubtext}>Créez une tâche pour commencer</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={handleAddTask}>
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e6ed",
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: "#7f8c8d",
  },
  progressContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#e0e6ed",
    borderRadius: 3,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#27ae60",
    borderRadius: 3,
  },
  content: {
    paddingVertical: 16,
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
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
});
