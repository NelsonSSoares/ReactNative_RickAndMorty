import { StyleSheet, Text, View } from "react-native";
import { ErrorComponentProps } from "../../constants/componentsProps";


export default function ErrorComponent({ title, message, titleStyle, messageStyle }: ErrorComponentProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, titleStyle]}>{title}</Text>
      <Text style={[styles.text, messageStyle]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});