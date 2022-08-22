import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export const Patient = ({patient, navigate}) => {
    
    const [active, setActive] = useState(false);
    
    return (
        <TouchableOpacity style={styles.itemsGroup} onPress={navigate.bind(this, 'Patient')}>
            <Image style={styles.patientAvatar}  source={{uri: patient.image}}/>
            <View style={styles.patientInfo}>
                <Text style={styles.patientName}>{patient.name}</Text>
                <Text style={styles.patientProblem}>{patient.problem}</Text>
            </View>
            <Text style={[styles.patientTime, patient.active ? styles.patientTimeActive : styles.patientTimeNotActive]}>{patient.time}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    itemsGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#F3F3F3',
        paddingVertical: 15,
        borderBottomWidth: 1
    },
    patientAvatar: {
        borderRadius: 50,
        width: 40,
        height: 40,
        marginRight: 16
    },
    patientInfo: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    patientName: {
        fontWeight: '600',
        fontSize: 16
    },
    patientProblem: {
        fontSize: 16,
        color: '#8b979f'
    },
    patientTime: {
        fontWeight:'600',
        fontSize: 14,
        borderRadius: 18,
        width: 70,
        height: 32,
        textAlign: 'center',
        lineHeight: 30,
    },
    patientTimeActive: {
        color: 'white',
        backgroundColor: 'blue'
    },
    patientTimeNotActive: {
        color: 'blue',
        backgroundColor: '#E9F5FF'
    }
})