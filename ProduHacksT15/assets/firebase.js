// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import 'firebase/database';

// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



if (!firebase.apps.length) {
   // Your web app's Firebase configuration
    const app = firebase.initializeApp ({  
    apiKey: "AIzaSyAPGeuwvbcl6UD3RdR5f6xf8k6eppF8NoU",
    authDomain: "team-15-485b6.firebaseapp.com",
    projectId: "team-15-485b6",
    storageBucket: "team-15-485b6.appspot.com",
    messagingSenderId: "166979220823",
    appId: "1:166979220823:web:06dcd97fea91b1819a3a12"
  });
}
// Get a reference to the database
const database = firebase.database();

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export default app;

// Trainers: many-to one with Users
const newTrainerRef = database.ref('trainer').push();
newTrainerRef.set({
  name: "Mary Thomas",
  email: 'marythomas@gmail.com',
  trainerid: 72198863,
  password: "iYZ1m6cNhYHuPN2cbRQ1",
  training_specialty: "sight",
  years_experience: 2,
});

// Users
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

// Appointments
const newAppointmentRef = database.ref('appointment').push();
newAppointmentRef.set({
    user: '',
    trainer: '',
    datetime: '2023-04-02T01:53:38Z', //UTC form
    duration: 30
});

// Reference to the Users database
const usersRef = database.ref('users');

// Reference to the Trainers database
const trainersRef = database.ref('trainers');

// Reference to the Appointments database
const appointmentsRef = database.ref('appointments');


//Assign a user and trainer to a date and time.
// Get a user from the Users database
usersRef.orderByChild('email').equalTo('john.doe@example.com').once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const user = childSnapshot.val();
      appointment.user = childSnapshot.key;
      console.log('User:', user);
    });
  });
  
  // Get a trainer from the Trainers database
  trainersRef.orderByChild('email').equalTo('marythomas@gmail.com').once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const trainer = childSnapshot.val();
      appointment.trainer = childSnapshot.key;
      console.log('Trainer:', trainer);
    });
  });
  
  // Store appointment in the Appointments database
  appointmentsRef.push(appointment);


// //Excercises added into Workout Routines.
// const newExerciseRef = database.ref('workout_routine').push();
// newExerciseRef.set({
//   name: "Child's Pose",
//   description: "Child's Pose involves kneeling and sitting back on the heels while reaching the arms forward. It stretches the hips, thighs, and ankles while also releasing tension in the lower back, shoulders, and neck.",
//   accessible_to: ["sight", "hearing"],
//   reps: 1,
//   sets: 3
// });
// newExerciseRef.set({
//     name: "Downward Dog",
//     description: "Start in a plank position, then lift your hips up and back while pressing your hands and feet into the ground. This stretch helps lengthen the spine, hamstrings, and calves.",
//     accessible_to: ["sight", "hearing"],
//     reps: 2,
//     sets: 4
// });
//   newExerciseRef.set({
//     name: "Standing Quad Stretch",
//     description: "Stand upright and balance on one leg, then bend your other leg and grasp your ankle with your hand. Gently pull your heel towards your buttocks until you feel a stretch in your quadriceps muscle.",
//     accessible_to: ["sight", "hearing"],
//     reps: 3,
//     sets: 3
// });

// // Get a reference to the user's workout routines
// const userWorkoutRoutinesRef = newUserRef.child('workoutRoutines');


// // Workout routines assigned to Users. Many workout routines to one Customer
// // Create a new workout routine for the user
// const newWorkoutRoutineRef = database.ref(`users/${newUserRef.key}/workoutRoutines`).push();
// const workout = {
//   name: 'Stretches',
//   exercises: ["Child's Pose", 'Downward Dog', 'Standing Quad Stretch']
// };
// newWorkoutRoutineRef.set(workout);

