import firebase from 'firebase';

const app1 = firebase.initializeApp({
    apiKey: "AIzaSyCQwyw77hEIySyBZlMUy1o3y0G2InC0Q7Q",
    authDomain: "number-transfer-53afa.firebaseapp.com",
    databaseURL: "https://number-transfer-53afa.firebaseio.com",
    projectId: "number-transfer-53afa",
    storageBucket: "number-transfer-53afa.appspot.com",
    messagingSenderId: "845760315425",
    appId: "1:845760315425:web:b04cd90eb34b0c84e5a360",
    measurementId: "G-B09GEVMK0Z"
});

// const app2 = firebase.initializeApp({
//     apiKey: "AIzaSyBmqHyvoYMCe5jOocCR10AySEuoYqIvJJo",
//     authDomain: "number-transfer2.firebaseapp.com",
//     databaseURL: "https://number-transfer2.firebaseio.com",
//     projectId: "number-transfer2",
//     storageBucket: "number-transfer2.appspot.com",
//     messagingSenderId: "726754897588",
//     appId: "1:726754897588:web:86d8eef36ff36e60ea31e1",
//     measurementId: "G-L8HDWVM8RQ"
// });

// let database1 = firebase.database(app1);

// let database2 = firebase.database(app2);

// Initialize Firebase
// const app1 = firebase.initializeApp(firebaseConfig1);

// Initialize Firebase
// const app2 = firebase.initializeApp(firebaseConfig2);

// export default !firebase.apps.length ? database1 : database2;


// firebase.initializeApp({
//     apiKey: "AIzaSyCQwyw77hEIySyBZlMUy1o3y0G2InC0Q7Q",
//     authDomain: "number-transfer-53afa.firebaseapp.com",
//     databaseURL: "https://number-transfer-53afa.firebaseio.com",
//     projectId: "number-transfer-53afa",
//     storageBucket: "number-transfer-53afa.appspot.com",
//     messagingSenderId: "845760315425",
//     appId: "1:845760315425:web:b04cd90eb34b0c84e5a360",
//     measurementId: "G-B09GEVMK0Z"
// });

// var firebaseConfig = {
    
// };

//initialize firebase
// firebase.initializeApp(firebaseConfig);

export default app1;