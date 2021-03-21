import firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyAqG_Pau-3xsXfj2hZ_QQCxTIg7g4y_d1M',
  authDomain: 'avoorder.firebaseapp.com',
  databaseURL: 'https://avoorder.firebaseio.com',
  projectId: 'avoorder',
  storageBucket: 'avoorder.appspot.com',
  messagingSenderId: '460905073823',
  appId: '1:460905073823:web:ffcc43d6aec76a810226aa'
}
try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
const fire = firebase
export default fire
