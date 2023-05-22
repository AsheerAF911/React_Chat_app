import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBPrpl9pl_45pfweVVTlMY6r8n2nqPxq9o',
  authDomain: 'chatterbox-5f17f.firebaseapp.com',
  databaseURL:
    'https://chatterbox-5f17f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chatterbox-5f17f',
  storageBucket: 'chatterbox-5f17f.appspot.com',
  messagingSenderId: '384874596336',
  appId: '1:384874596336:web:07899b3977c4f70a487f35',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
