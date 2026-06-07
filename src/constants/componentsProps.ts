import { StyleProp, TextStyle } from "react-native";

export interface ErrorComponentProps {
  title: string;
  message: string;
  titleStyle?: StyleProp<TextStyle>; 
  messageStyle?: StyleProp<TextStyle>;
}