importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");

firebase.initializeApp(
    {
        apiKey: "AIzaSyCuJ7PBsxr6KHZRFw3QzYqEVAXYy0vyB34",
        authDomain: "codeflowmiviajep4ang.firebaseapp.com",
        projectId: "codeflowmiviajep4ang",
        storageBucket: "codeflowmiviajep4ang.appspot.com",
        messagingSenderId: "78549437438",
        appId: "1:78549437438:web:f6480ff9dbe16444990eaf",
        measurementId: "G-1EJK8VSF1S"
      }
)
const messaging= firebase.messaging();