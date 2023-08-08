import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../../constants/styles";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyles.colors.primary500,
  },
});

export default Loader;
