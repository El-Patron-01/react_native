import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import PatientScreen from './src/screens/PatientScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Пациенты',
      headerTintColor: 'blue',
      headerStyle: {
        elevation: 1,
        shadowOpacity: 1
      }
    }
  },
  Patient: {
    screen: PatientScreen,
    navigationOptions: {
      title: 'Карта пациента',
      headerTintColor: 'blue',
      headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8
      }
    }
  }
})

export default createAppContainer(AppNavigator)

// const Stack = createNativeStackNavigator();

// const App = () => {
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name='Home' component={HomeScreen} />
//       <Stack.Screen name='Patient' component={PatientScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 50,
//     paddingHorizontal: 20
//   },
//   dateText: {
//     fontWeight: '800',
//     fontSize: 22,
//     color: '#00000',
//     paddingVertical: 20
//   },
//   // patientAvatar: {
//   //   borderRadius: 50,
//   //   width: 40,
//   //   height: 40,
//   //   marginRight: 16
//   // },
//   // itemsGroup: {
//   //   flexDirection: 'row',
//   //   alignItems: 'center',
//   //   borderBottomColor: '#F3F3F3',
//   //   paddingVertical: 15,
//   //   borderBottomWidth: 1
//   // },
//   // patientInfo: {
//   //   flex: 1,
//   //   alignItems: 'flex-start',
//   //   justifyContent: 'center'
//   // },
//   // patientName: {
//   //   fontWeight: '600',
//   //   fontSize: 16
//   // },
//   // patientProblem: {
//   //   fontSize: 16,
//   //   color: '#8b979f'
//   // },
//   // patientTime: {
//   //   fontWeight:'600',
//   //   fontSize: 14,
//   //   borderRadius: 18,
//   //   width: 70,
//   //   height: 32,
//   //   textAlign: 'center',
//   //   lineHeight: 30,
//   // },
//   // patientTimeActive: {
//   //   color: 'white',
//   //   backgroundColor: 'blue'
//   // },
//   // patientTimeNotActive: {
//   //   color: 'blue',
//   //   backgroundColor: '#E9F5FF'
//   // }
// })