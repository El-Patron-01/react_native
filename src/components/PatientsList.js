import { Image, ScrollView, StyleSheet, View, TouchableOpacity, Text, FlatList } from "react-native";
import { patients } from "../patientsMocks";
import { Patient } from './Patient';

 
 
export const PatientsList = ({navigate}) => {
    
    
    return (
        <FlatList
        data={patients}
        renderItem={({item}) => 
            <Patient patient={item} navigate={navigate} />
        }
        keyExtractor={item => item.id}
        />
    )
};

const styles = StyleSheet.create({
    itemsGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#F3F3F3',
        paddingVertical: 15,
        borderBottomWidth: 1
    }
})
 