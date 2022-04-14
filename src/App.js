import { useState } from 'react'

import Comments from './components/Comments'
import Header from './components/Header'
import Post from './components/Post'
import Modal from './components/Modal'

import './App.css'

export default function App() {

  const [showModal, setShowModal] = useState(true)
  const [displayName, setDisplayName] = useState('')

  return (
    <div className="App">
      {/* <Header /> */}
      <main className='main'>
        <Post />
        <Comments displayName={displayName}/>
      </main>
      {showModal && <Modal>
          <h2>hey there! 👋</h2>
          <form>
            <label>
              <span>what should we call you?</span>
              <input 
                type='text'
                required
                onChange={e => setDisplayName(e.target.value)}
                value={displayName}
              />
            </label>
          </form>
          <button onClick={() => {setShowModal(false)}}>submit</button>
        </Modal>}
    </div>
  )
}
