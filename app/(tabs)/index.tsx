import { StyleSheet, Text, View } from "react-native";

export default function ChatScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.emoji}>💬</Text>
      <Text style={styles.title}>Reze Chat</Text>
      <Text style={styles.subtitle}>
        Hey JB, I&apos;m here. Try not to act too surprised 😏
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#07070d",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  emoji: {
    fontSize: 54,
    marginBottom: 16,
  },
  title: {
    color: "#f4f4f7",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 10,
  },
  subtitle: {
    color: "#b8b8c7",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
});