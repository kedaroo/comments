import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'

export const useFirestore = (c) => {
    const [error, setError] = useState(null)

    const ref = collection(db, c)

    const addDocument = async (doc) => {
        setError(null)

        try {
            await addDoc(ref, doc)
        } catch(err) {
            setError(err.message)
        }
    }

    return { error, addDocument }
}