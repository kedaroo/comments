import './Post.css'

export default function Post() {
    return (
        <div>
            <img 
                className='img-post'
                src={require('../assets/post.jpg')}
                alt='post'
            />
        </div>
    )
}