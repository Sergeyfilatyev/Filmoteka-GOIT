import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBUUOWhb_7XbOzuT8pTA1Wpw-PNq4k4ukE',
  authDomain: 'filmoteka-goit-group.firebaseapp.com',
  databaseURL:
    'https://filmoteka-goit-group-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-goit-group',
  storageBucket: 'filmoteka-goit-group.appspot.com',
  messagingSenderId: '736037255329',
  appId: '1:736037255329:web:340106162f8d67d6e558e0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function postToFirebase(movie) {
  return fetch(
    'https://filmoteka-goit-group-default-rtdb.europe-west1.firebasedatabase.app/filmoteka.json',
    {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(response => response.json())
    .then(response => console.log(response));
}
const obj = {
  a: 1,
  d: 34,
};
postToFirebase(obj).then(response => console.log('hello'));
function addToLocalStorage() {}
function getToFirebase() {
  return fetch(
    'https://filmoteka-goit-group-default-rtdb.europe-west1.firebasedatabase.app/filmoteka.json'
  )
    .then(response => response.json())
    .then(response => console.log(response));
}
getToFirebase();
function authWithEmailPassword(email, password) {
  return fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`,
    {
      method: 'POST',
      body: JSON.stringify({ email, password, returnSecureToken: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(response => response.json())
    .then(data => console.log(data.idToken));
}
authWithEmailPassword('test@mail.com', '1234567');
