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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  firebase.auth().onAuthStateChanged(function(user) {
      var notLoggedIn = document.getElementById('not logged in')
      var LoggedIn = document.getElementById('logged in')
      if (user){
          LoggedIn.style.display = 'block'
          notLoggedIn.style.display = 'none'
      } else {
        LoggedIn.style.display = 'none'
        notLoggedIn.style.display = 'block'
      }
  });

  function login(event){
      event.preventDefault()
      var email = document.getElementById('email').value
      var password = document.getElementById('password').value

      firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
          console.log('Error signing in,',error.message)
          allert(error.message)

  }).then(function(user){
     if(user){
         alert('welcome back, you are now logged in')
     }
  })
}

function logout(){
    firebase.auth().signOut().then(function() {

    }).catch(function(error){
        
    });
}