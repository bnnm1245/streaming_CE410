import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyALjJ0BVEcqbzMtP-BvRKb5TxFR-iw_EhQ", // Add API Key
  databaseURL:"https://streamce410-default-rtdb.asia-southeast1.firebasedatabase.app/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("Nhap ten cua ban vao di:");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
