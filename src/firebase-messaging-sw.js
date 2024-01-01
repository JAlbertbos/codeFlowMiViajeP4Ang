importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyCuJ7PBsxr6KHZRFw3QzYqEVAXYy0vyB34",
  authDomain: "codeflowmiviajep4ang.firebaseapp.com",
  projectId: "codeflowmiviajep4ang",
  storageBucket: "codeflowmiviajep4ang.appspot.com",
  messagingSenderId: "78549437438",
  appId: "1:78549437438:web:f6480ff9dbe16444990eaf",
  measurementId: "G-1EJK8VSF1S"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Mensaje recibido en el Service Worker:', payload);
  // Aquí puedes mostrar una notificación o enviar los datos al cliente a través de postMessage()
});