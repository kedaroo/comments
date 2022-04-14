import { db } from '../firebase/config'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useState, useEffect } from 'react'

export const useCollection = (c) => {

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const ref = collection(db, c)
        const q = query(ref, orderBy('createdAt'))

        const unsub = onSnapshot(q, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() })
            })
            setDocuments(results)
            setError(null)
        }, err => {
            setError(err.message)
            console.log(err.message)
        })

        return () => unsub()

    }, [c])

    return { documents, error }

}