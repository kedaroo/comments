import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAFK-OFr17OI1UKi2XrLrxYZWCRebCdEPI",
    authDomain: "comments-60881.firebaseapp.com",
    projectId: "comments-60881",
    storageBucket: "comments-60881.appspot.com",
    messagingSenderId: "83645668256",
    appId: "1:83645668256:web:caf730dd66d86c904222c5"
}

initializeApp(firebaseConfig)

const db = getFirestore()

export { db }