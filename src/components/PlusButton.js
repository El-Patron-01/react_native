import { StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native"
import { Entypo } from '@expo/vector-icons';

export const PlusButton = () => {
    return (
        <TouchableOpacity style={styles.plusButton}>
          <Entypo name='plus' size={34} color='white' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    plusButton: {
        width: 64,
        height: 64,
        backgroundColor: 'blue',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 25,
        bottom: 25,
        shadowColor: "#2a86ff",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
  }
})