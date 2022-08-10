const init = () => {

  console.log("Windows loaded");
  const firebaseConfig = {
    apiKey: "AIzaSyCjt2-glkRgo61PomWKlT0-fZGX2LGPt-8",
    authDomain: "aku1-ee001.firebaseapp.com",
    projectId: "aku1-ee001",
    storageBucket: "aku1-ee001.appspot.com",
    messagingSenderId: "701312859554",
    appId: "1:701312859554:web:47eb374da38b1e9e6ac6fb",
    measurementId: "G-V043Z5WF62"
  };
  // Initialize Firebase  
  firebase.initializeApp(firebaseConfig)
  // const app = initializeApp(firebaseConfig);
  console.log(firebase.app().name); //DEFAULT

}


window.onload = init;




