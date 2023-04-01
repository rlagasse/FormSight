import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Browse Trainers"
        onPress={() => navigation.navigate('TrainerBrowse')}
      />
      <Button
        title="Edit Profile"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <Button
        title="Start Training"
        onPress={() => navigation.navigate('StartTraining')}
      />
    </View>
  );
}

function UserProfileScreen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Profile</Text>
      <Button
        title="Edit Accessibility Needs"
        onPress={() => navigation.navigate('EditAccessibility')}
      />
    </View>
  );
}

function EditAccessibilityScreen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Edit Accessibility Needs</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.navigate('UserProfile')}
      />
    </View>
  );
}

function StartTrainingScreen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Training</Text>
      {/* <Button
        title="Record"
        onPress={() => navigation.navigate('UserProfile')}
      /> */}
    </View>
  );
}
function TrainerBrowseScreen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Browse Trainers</Text>
      <Button
        title="View Trainer 1"
        onPress={() => navigation.navigate('Trainer1')}
      />
      <Button
        title="View Trainer 2"
        onPress={() => navigation.navigate('Trainer2')}
      />
    </View>
  );
}

function Trainer1Screen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Trainer 1 Info</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.navigate('TrainerBrowse')}
      />
    </View>
  );
}


function Trainer2Screen({navigation}) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Trainer 2 Info</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.navigate('TrainerBrowse')}
      />
    </View>
  );
}




function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StartTraining" component={StartTrainingScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="EditAccessibility" component={EditAccessibilityScreen} />
        <Stack.Screen name="TrainerBrowse" component={TrainerBrowseScreen} />
        <Stack.Screen name="Trainer1" component={Trainer1Screen} />
        <Stack.Screen name="Trainer2" component={Trainer2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



// export default function App() {
//   const [type, setType] = useState(CameraType.back);
//   const [permission, requestPermission] = Camera.useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet
//     return (
//       <View style={styles.container}>
//         <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   function toggleCameraType() {
//     setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
//   }

//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} type={type}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});