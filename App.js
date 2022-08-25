import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PatientScreen from './src/screens/PatientScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: {
//       title: 'Пациенты',
//       headerTintColor: '#2687ff',
//       headerStyle: {
//         elevation: 1,
//         shadowOpacity: 1
//       }
//     }
//   },
//   Patient: {
//     screen: PatientScreen,
//     navigationOptions: {
//       title: 'Карта пациента',
//       headerTintColor: '#2687ff',
//       headerStyle: {
//         elevation: 0.8,
//         shadowOpacity: 0.8
//       }
//     }
//   }  
// },
// {
//   initialRouteName: 'Patient'
// })

// export default createAppContainer(AppNavigator)

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            title: 'Пациенты',
            headerTintColor: '#2687ff',
            headerStyle: {
            elevation: 1,
            shadowOpacity: 1
            }
          }}/>
        <Stack.Screen 
          name='Patient' 
          component={PatientScreen} 
          options={{
            title: 'Карта пациента',
            headerTintColor: '#2687ff',
            headerStyle: {
              elevation: 0.8,
              shadowOpacity: 0.8
            }
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

