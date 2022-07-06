import axios from "axios";
import { useEffect, useState } from "react";

const tabs = ['posts','comments', 'albums' ]

function Contents() {
    const [title, setTitle] = useState('')
    const [posts, setPost] = useState([])
    const [type, setType] = useState('posts')

    const [ show, setShow] = useState(false)
    
    useEffect( () => {
        const handleScroll = () => {
            console.log(window.scrollY)
        
            setShow(window.scrollY >= 200)
            // if(window.scrollY >= 200) {
            //     console.log(show)
            //     return setShow(true)
            // }
            // else {setShow(false)}
        
        }

        window.addEventListener('scroll', handleScroll)
        // window.addEventListener('resize')

        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('unmount')
        }
    },[])
    
   
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res => {
            setPost(res.data);
            // console.log(res.data)
        })
        .catch(error => {console.log(error)} )
    },[type])
    return (  
        <div>
            {tabs.map((tab) =>(
                <button 
                    key={tab}
                    style = {type === tab ? {
                        color: '#222',
                        backgroundColor: '#222'
                    } : {}
                    }
                    onClick={ ()=> setType(tab) }
                >
                    {tab}
                </button>
            ))}
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
            { show && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}  
                >
                    gototop
                </button>
            ) }
        </div>

    );
}

export default Contents;