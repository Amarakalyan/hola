
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      var firebaseConfig = {
            apiKey: "AIzaSyCVui4ruyv7F8reIzXFsHcknwiFJj3oXpE",
            authDomain: "hola-68515.firebaseapp.com",
            databaseURL: "https://hola-68515-default-rtdb.firebaseio.com",
            projectId: "hola-68515",
            storageBucket: "hola-68515.appspot.com",
            messagingSenderId: "220325860964",
            appId: "1:220325860964:web:6fde87c548a92b65703171"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
