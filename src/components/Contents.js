import axios from "axios";
import { useEffect, useState } from "react";


function Contents() {
    const [title, setTitle] = useState('')
    const [posts, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPost(res.data);
            // console.log(res.data)
        })
        .catch(error => {console.log(error)} )
    })
    return (  
        <div>
            <h1>hellooo anh em</h1>
            <input 
                type='text' 
                value={title}
                onChange={e => setTitle(e.target.value) }
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>

    );
}

export default Contents;