import { Image, StyleSheet, View } from "react-native";
import { Character } from "../../constants/types/gqltypes";
import { Text } from "react-native";

export default function Card({ character }: { character: Character }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: character.image }}
                style={styles.img}
            />
            <Text style={styles.txt}>{character.name}</Text>
            <Text style={styles.txt}>{character.species}</Text>
            <Text
                style={{
                    color:
                    character.status === 'Alive'
                        ? 'green'
                        : character.status === 'Dead'
                        ? 'red'
                        : 'gray',
                    fontWeight:'bold'
                }}>{character.status}</Text>
         
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 10,
  },

  img: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  txt:{
    fontWeight: 'bold'
  }
});
