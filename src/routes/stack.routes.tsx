import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";
import CharacterDetails from "../screens/CharacterDetails";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="TabRoutes" component={TabRoutes} />
            <Stack.Screen options={{headerShown: true}} name="CharacterDetails" component={CharacterDetails} />
        </Stack.Navigator>
    )
}