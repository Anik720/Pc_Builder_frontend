import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjZ4YjyB1nrS4p1zkB7AECBe-pBGzK_oQ",
  authDomain: "pcbuilder-34184.firebaseapp.com",
  projectId: "pcbuilder-34184",
  storageBucket: "pcbuilder-34184.appspot.com",
  messagingSenderId: "143384535714",
  appId: "1:143384535714:web:af0f1164b2ed02e9936dfb",
};

const app = initializeApp(firebaseConfig);

export default app;
