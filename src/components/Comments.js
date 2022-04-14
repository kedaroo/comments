import { useState } from 'react'
import { Timestamp } from 'firebase/firestore'
import { useFirestore } from '../hooks/useFirestore'
import { useCollection } from '../hooks/useCollection'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import './Comments.css'

export default function Comments({ displayName }) {
    const [newComment, setNewComment] = useState('')
    const { addDocument } = useFirestore('comments')
    const { documents, error } = useCollection('comments')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const commentToAdd = {
            displayName,
            // photoURL: null,
            createdAt: Timestamp.fromDate(new Date()),
            content: newComment,
            id: Math.random()
        }
        await addDocument(commentToAdd)
        setNewComment('')
    }

    return (
        <div>
            <div>
                {error && <p>could not fetch comments</p>}
                {!documents && <p>loading comments</p>}
                {documents && documents.map(doc => (
                    <div key={doc.id}>
                        <h3>{doc.displayName}</h3>
                        <h4>{formatDistanceToNow(doc.createdAt.toDate(), { addSuffix: true })}</h4>
                        <p>{doc.content}</p>
                    </div>    
                    
                )) }
            </div>
            <form className='comment-form' onSubmit={handleSubmit}>
                <textarea
                    placeholder='enter comment'
                    onChange={e => setNewComment(e.target.value)}
                    value={newComment}
                />
                <button>post</button>
            </form>
        </div>
        
    )
}