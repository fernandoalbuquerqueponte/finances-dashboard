import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
   apiKey: "AIzaSyCIWxCbJSIc0f_8PAQQ50qCu1ubELitYT8",
   authDomain: "finances-dashboard-2e51c.firebaseapp.com",
   projectId: "finances-dashboard-2e51c",
   storageBucket: "finances-dashboard-2e51c.appspot.com",
   messagingSenderId: "408185654721",
   appId: "1:408185654721:web:f4d3e7a0136915cb43f340"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage, firebaseApp }