import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBudbYt5QamAB7mAY3rvufK_SlXewLc00Q',
  authDomain: 'boomtown-e0104.firebaseapp.com',
  databaseURL: 'https://boomtown-e0104.firebaseio.com',
  projectId: 'boomtown-e0104',
  storageBucket: 'boomtown-e0104.appspot.com',
  messagingSenderId: '611356202136'
};

// export default class firebase {
//   static init() {
//     firebase.initializeApp(config);
//     Firebase.auth = firebase.auth();
//   }
// }

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
