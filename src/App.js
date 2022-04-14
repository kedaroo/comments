import './App.css'
import Comments from './components/Comments'
import Header from './components/Header'
import Post from './components/Post'

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Post />
        <Comments />
      </main>
      
    </div>
  )
}
