import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';


export const Appointment = () => {
    return (
        <View style={styles.appointment}>
            <View style={styles.teeth}>
                <AntDesign name="user" size={18} color="black" />
                <Text style={styles.teethName}>Зуб:</Text>
                <Text style={styles.teethNumber}>12</Text>
            </View>
            <View style={styles.teeth}>
                <AntDesign name="user" size={18} color="black" />
                <Text style={styles.teethName}>Диагноз:</Text>
                <Text style={styles.teethNumber}>пульпит</Text>
            </View>
            <View style={styles.appointmentBottom}>
                <TouchableOpacity style={styles.appointmentTime}>
                    <Text style={styles.appointmentTimeText}>11.10.2019 - 15:40</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.appointmentCost}>
                    <Text style={styles.appointmentCostText}>1500 P</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    appointment: {
        paddingHorizontal: 20,
        marginTop: 20,
        backgroundColor: 'white',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderRadius: 18,
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
    },
    teeth: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    teethName: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16
    },
    teethNumber: {
        fontWeight: '600',
        fontSize: 16
    },
    appointmentBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    appointmentTime: {
        width: 180,
        height: 32,
        backgroundColor: '#2687ff',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appointmentTimeText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '800'
    },
    appointmentCost: {
        width: 80,
        height: 32,
        backgroundColor: '#e2ebdc',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appointmentCostText:{
        color: '#7ec565',
        fontSize: 16,
        fontWeight: '800'
    }
});