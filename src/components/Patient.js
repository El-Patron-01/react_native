import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export const Patient = ({patient, navigate}) => {
    
    
    return (
        <View>
            <TouchableOpacity style={styles.itemsGroup} onPress={navigate.bind(this, 'Patient', patient)}>
                <Image style={styles.patientAvatar}  source={{uri: patient.image}}/>
                <View style={styles.patientInfo}>
                    <Text style={styles.patientName}>{patient.name}</Text>
                    <Text style={styles.patientProblem}>{patient.problem}</Text>
                </View>
                <Text style={patient.active ? styles.patientTimeActive : styles.patientTimeNotActive}>{patient.time}</Text>
            </TouchableOpacity>
        </View>
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
    patientTimeActive: {
        textAlign: 'center',
        lineHeight: 32,
        fontWeight:'600',
        fontSize: 14,
        width: 70,
        height: 32,
        color: 'white',
        borderRadius: 18,
        backgroundColor: '#2687ff',
        overflow: 'hidden'
    },
    patientTimeNotActive: {
        textAlign: 'center',
        lineHeight: 32,
        fontWeight:'600',
        fontSize: 14,
        width: 70,
        height: 32,
        color: '#2687ff',
        borderRadius: 18,
        backgroundColor: '#E9F5FF',
        overflow: 'hidden'
    }
})