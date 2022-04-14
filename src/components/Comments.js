import { useState } from 'react'

import './Comments.css'

export default function Comments() {
    return (
        <form>
            <textarea
                placeholder='enter comment'
            />
            <button>post</button>
        </form>
    )
}