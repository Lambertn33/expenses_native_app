import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ name, size, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.iconContainer}>
        <Ionicons name={name} color={color} size={size} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginHorizontal: 4,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default Icon;
