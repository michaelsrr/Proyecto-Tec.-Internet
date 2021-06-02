var firebaseConfig = {
    apiKey: "AIzaSyCQkEEdcwwoXtQqgkjpgdzkCCqjQ164KN4",
    authDomain: "proyect-tec-1f411.firebaseapp.com",
    databaseURL: "https://proyect-tec-1f411-default-rtdb.firebaseio.com",
    projectId: "proyect-tec-1f411",
    storageBucket: "proyect-tec-1f411.appspot.com",
    messagingSenderId: "222158333750",
    appId: "1:222158333750:web:834ea07fcdc78a512cb597",
    measurementId: "G-9RLGKMNBE5"
};

var firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().settings({ timestampsInSnapshots: true });

var email = 'est.michael.reyes@unimilitar.edu.co';
var password = '123454';

// All future sign-in request now include tenant ID.
firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (result) {
        console.log(result)
    }).catch(function (error) {
        console.error(error)
    });