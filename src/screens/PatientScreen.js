import { Text } from "react-native"
import React, { Component } from 'react';

class PatientScreen extends Component {
    
    static navigationOptions = {
        title: 'Карта пациента',
        headerTintColor: 'blue',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0
        }
      };
    
    render() {
        return (
            <Text>Hello patient</Text>
        );
    }
}

export default PatientScreen;




