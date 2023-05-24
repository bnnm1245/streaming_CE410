import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAj8TEq0ExBNQcgLmaBjOAmSxxbHq9Mqag", // Add API Key
  databaseURL:"https://streamiing-8d647-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("Nhap ten cua ban vao:");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
