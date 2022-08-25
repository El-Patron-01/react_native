import { StyleSheet, Text, View } from "react-native"
import React, { Component } from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import { Appointment } from "../components/Appointment";

const PatientScreen = () => {
    
  return (
      <View>
        <View style={styles.patientInfo}>
          <Text style={styles.patientName}>Марина Алмазова</Text>
          <Text style={styles.patientPhone}>+7 (999) 200-66-55</Text>
          <View style={styles.patientInfoBottom}>
            <TouchableOpacity style={styles.teethFormula}>
              <Text style={styles.teethFormulaText}>Формула зубов</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.callIcon}>
              <Ionicons name="call" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.appointmentText}>Приемы</Text>
        <Appointment/>
      </View>
  );
};

const styles = StyleSheet.create({
  patientInfo: {
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 20
  },
  patientName: {
    fontSize: 32,
    fontWeight: '800'
  },
  patientPhone: {
    color: 'gray',
    fontSize: 16,
    marginTop: 10
  },
  teethFormula: {
    width: 290,
    backgroundColor: '#2687ff',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teethFormulaText: {
    color: 'white',
    fontSize: 16
  },
  callIcon: {
    width: 50,
    backgroundColor: '#7ec565',
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  callIconText: {
    color:'white',
    fontSize: 16
  },
  patientInfoBottom: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  appointmentText: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 22,
    fontWeight: '800'
  },
  // appointment: {
  //   paddingHorizontal: 20,
  //   marginTop: 20,
  //   backgroundColor: 'white',
  //   paddingVertical: 20,
  //   marginHorizontal: 20,
  //   borderRadius: 18,
  // },
  // teeth: {
  //   flexDirection: 'row',
  //   paddingVertical: 5,
  // },
  // teethName: {
  //   paddingLeft: 10,
  //   paddingRight: 10,
  //   fontSize: 16
  // },
  // teethNumber: {
  //   fontWeight: '600',
  //   fontSize: 16
  // },
  // appointmentBottom: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingTop: 10
  // },
  // appointmentTime: {
  //   width: 200,
  //   height: 32,
  //   backgroundColor: '#2687ff',
  //   borderRadius: 18,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // appointmentTimeText: {
  //   color: 'white',
  //   fontSize: 16,
  //   fontWeight: '800'
  // },
  // appointmentCost: {
  //   width: 80,
  //   height: 32,
  //   backgroundColor: '#e2ebdc',
  //   borderRadius: 18,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // appointmentCostText:{
  //   color: '#7ec565',
  //   fontSize: 16,
  //   fontWeight: '800'
  // }
})

export default PatientScreen;




