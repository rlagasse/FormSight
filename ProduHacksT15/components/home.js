import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// function HomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
  
//         <View style={styles.bottomView}>
//           <View style = {styles.buttonContainer}>
//           <Button
//               title="Browse Trainers"
//               onPress={() => navigation.navigate('TrainerBrowse')}
//             />
//             </View>
//             <View style = {styles.buttonContainer}>
//             <Button
//               title="Start Training"
//               onPress={() => navigation.navigate('StartTraining')}
//             />
//             </View>
          
//           </View>    
  
//       </View>
//     );
//   }