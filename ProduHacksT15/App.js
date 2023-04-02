import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, Pressable, TouchableOpacity, View, TextInput, ImageBackground, Dimensions } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import calendar from "./img/calendar.png";
import home from "./img/home.png";
import time from "./img/time.png";
import selectTime from "./img/selectTime.png";
import findTime from "./img/findTime.png";
import confirmed from "./img/confirmation.png";

import firebase from './assets/firebase';




function LoginScreen({ navigation }) {
  //const db = firebase.database();
  // const ref = db.ref('usersRef');
  // usersRef.once('value', snapshot => {
  //   const users = snapshot.val();
  //   console.log(users);
  // });
  return (
      <View style={styles.container} >
        
        <TextInput
          // value={this.state.username}
          // onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          // value={this.state.password}
          // onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <ImageBackground 
        source={home}
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}} 
    />

      <Text>Home Screen</Text>

      <View style={styles.bottomView}>
        <View style = {styles.buttonContainer}>
        <Button
            title="Trainers"
            onPress={() => navigation.navigate('Calendar')}
          />
          </View>
          <View style = {styles.buttonContainer}>
          <Button
            title="Form Check"
            onPress={() => navigation.navigate('Calendar')}
          />
          </View>
        
        </View>    

    </View>
  );
}
function CalendarScreen({navigation}) {
  return(
    <ImageBackground
        source={calendar}
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Pressable style={styles.button} onPress={() => navigation.navigate('Schedule')}>
      <Text style={styles.text}>{'Select a time'}</Text>
    </Pressable>
  
    
    </View>
    </ImageBackground>
  );
}

function FormCheckScreen({navigation}) {
  return(
    <ImageBackground
        source={calendar}
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <Pressable style={styles.button} onPress={() => navigation.navigate('Schedule')}>
      <Text style={styles.text}>{'Select a time'}</Text>
    </Pressable>
    
    </View>
    </ImageBackground>
  );
}

function ScheduleScreen({navigation}) {
  return(
    <ImageBackground
        source={findTime}
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    {/* <Pressable style={styles.scheduleButton} onPress={() => navigation.navigate('TrainerBrowse')}>
      <Text style={styles.text}>{'12:00pm'}</Text>
    </Pressable>

    <Pressable style={styles.scheduleButton} onPress={() => navigation.navigate('Schedule')}>
      <Text style={styles.text}>{'1:00pm'}</Text>
    </Pressable>

    <Pressable style={styles.scheduleButton} onPress={() => navigation.navigate('Schedule')}>
      <Text style={styles.text}>{'2:00pm'}</Text>
    </Pressable> */}

    <Pressable style={styles.confirmButton} onPress={() => navigation.navigate('Confirmed')}>
      <Text style={styles.text}>{'Confirm'}</Text>
    </Pressable>

    </View>
    </ImageBackground>
  );
}

function ConfirmedAppointmentScreen({navigation}) {
  return(
    <ImageBackground
        source={confirmed}
        style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
    </View>
    </ImageBackground>
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
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false }}/>
        <Stack.Screen name="Calendar" component={CalendarScreen}options={{headerShown: false }} />
        <Stack.Screen name="Schedule" component={ScheduleScreen}options={{headerShown: false }} />
        <Stack.Screen name="Confirmed" component={ConfirmedAppointmentScreen}options={{headerShown: false }} />
        <Stack.Screen name="FormCheck" component={FormCheckScreen} />
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
  camera: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 310,
  },

  scheduleButton: {
    alignItems: 'center',
    position: 'relative',
    bottom: 148,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin:7,
  },

  confirmButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginTop: 325,
  },

  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },

  bottomView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },

buttonContainer: {
    flex: 1,
}

});
