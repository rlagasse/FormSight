// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import 'firebase/database';

// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp ({  
  apiKey: "AIzaSyAPGeuwvbcl6UD3RdR5f6xf8k6eppF8NoU",
  authDomain: "team-15-485b6.firebaseapp.com",
  projectId: "team-15-485b6",
  storageBucket: "team-15-485b6.appspot.com",
  messagingSenderId: "166979220823",
  appId: "1:166979220823:web:06dcd97fea91b1819a3a12"
});

// Get a reference to the database
const database = firebase.database();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default app;

// Trainers: many-to one with Customers
const newTrainerRef = database.ref('trainer').push();
newTrainerRef.set({
  name: "Mary Thomas",
  email: 'marythomas@gmail.com',
  trainerid: 72198863,
  password: "iYZ1m6cNhYHuPN2cbRQ1",
  training_specialty: "sight",
  years_experience: 2,
});

// Customers
const newUserRef = database.ref('user').push();
newUserRef.set({
  name: "John Doe",
  email: 'john.doe@example.com',
  userid: 84019707,
  password: "78sZopgT8nAdZVfKbCPm",
  accessibility_focus: "sight",
  severity: 5,
  additional_comments: "n/a",
  experience: "beginner",
  weekly_workout_frequency: 2,
  trainer: newTrainerRef.key //link by trainer key.
});

//Excercises added into Workout Routines.
const newExerciseRef = database.ref('workout_routine').push();
newWorkoutRoutineRef.set({
  name: "Child's Pose",
  description: "Child's Pose involves kneeling and sitting back on the heels while reaching the arms forward. It stretches the hips, thighs, and ankles while also releasing tension in the lower back, shoulders, and neck.",
  accessible_to: "sight, hearing",
  reps: 1,
  sets: 3
});


// Workout routines assigned to Customers. Many workout routines to one Customer


