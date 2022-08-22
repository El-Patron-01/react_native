import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PatientsList } from '../components/PatientsList';
import { PlusButton } from '../components/PlusButton';

class HomeScreen extends React.Component {
  
  
  render () {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.dateText}>11 сентября</Text>
        <PatientsList navigate={navigation.navigate}/>
        <PlusButton />
      </View>
    )
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: 'white'
    },
    dateText: {
      fontWeight: '800',
      fontSize: 22,
      color: '#00000',
      paddingVertical: 20
    }
})
