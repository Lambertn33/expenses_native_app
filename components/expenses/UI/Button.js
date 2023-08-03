import { StyleSheet, Pressable, View, Text } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

const Button = ({ children, onPress}) => {
  return (
    <View>
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed} >
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: GlobalStyles.colors.primary500,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },

  pressed: {
    opacity: 0.75,
  },
});

export default Button;
