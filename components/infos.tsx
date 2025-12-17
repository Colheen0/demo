import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface UserInfoProps {
  name: string;
  login: string;
  password: string;
  nbLists: number;
  nbTasks: number;
}

export default function UserInfo({ 
  name, 
  login, 
  password, 
  nbLists, 
  nbTasks 
}: UserInfoProps) {
  const [showPassword, setShowPassword] = useState(false);
  const maskedPassword = password ? "•".repeat(Math.min(password.length, 12)) : "••••••••";

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color="#3498db" />
        </View>
        <Text style={styles.headerTitle}>Informations du Compte</Text>
      </View>

      {/* User Info Card */}
      <View style={styles.card}>
        <View style={styles.infoGroup}>
          <View style={styles.infoRow}>
            <View style={styles.infoLeft}>
              <Ionicons name="person-circle" size={20} color="#3498db" />
              <Text style={styles.label}>Nom Complet</Text>
            </View>
            <Text style={styles.value}>{name}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoGroup}>
          <View style={styles.infoRow}>
            <View style={styles.infoLeft}>
              <Ionicons name="mail" size={20} color="#3498db" />
              <Text style={styles.label}>Email</Text>
            </View>
            <Text style={[styles.value, styles.emailValue]}>{login}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoGroup}>
          <View style={styles.infoRow}>
            <View style={styles.infoLeft}>
              <Ionicons name="lock-closed" size={20} color="#3498db" />
              <Text style={styles.label}>Mot de passe</Text>
            </View>
            <View style={styles.passwordContainer}>
              <Text style={styles.value}>
                {showPassword ? password : maskedPassword}
              </Text>
              <TouchableOpacity 
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons 
                  name={showPassword ? "eye" : "eye-off"} 
                  size={18} 
                  color="#3498db" 
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Stats Card */}
      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>Statistiques</Text>
        
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <View style={styles.statIconContainer}>
              <Ionicons name="list" size={24} color="#fff" />
            </View>
            <Text style={styles.statLabel}>Listes</Text>
            <Text style={styles.statNumber}>{nbLists}</Text>
          </View>

          <View style={styles.statDivider} />

          <View style={styles.statItem}>
            <View style={styles.statIconContainer2}>
              <Ionicons name="checkmark-circle" size={24} color="#fff" />
            </View>
            <Text style={styles.statLabel}>Tâches</Text>
            <Text style={styles.statNumber}>{nbTasks}</Text>
          </View>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="pencil" size={18} color="#fff" />
          <Text style={styles.editButtonText}>Modifier le Compte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Ionicons name="log-out" size={18} color="#e74c3c" />
          <Text style={styles.logoutButtonText}>Se Déconnecter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2c3e50",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  infoGroup: {
    paddingVertical: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7f8c8d",
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2c3e50",
    flex: 1,
    textAlign: "right",
  },
  emailValue: {
    marginRight: 8,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  eyeButton: {
    padding: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e6ed",
    marginVertical: 12,
  },
  statsCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3498db",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statIconContainer2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#27ae60",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#7f8c8d",
    marginBottom: 4,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2c3e50",
  },
  statDivider: {
    width: 1,
    height: 60,
    backgroundColor: "#e0e6ed",
  },
  actionsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "#fadbd8",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  logoutButtonText: {
    color: "#e74c3c",
    fontSize: 14,
    fontWeight: "600",
  },
});
