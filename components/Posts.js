import { useEffect, useState } from 'react'
import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Post from './Post'
function Posts() {
    // const [realtimePosts]= useCollection(
    //     db.collection("posts").orderBy('timestamp','desc')
    // )
    const [realtimePosts, setRealtimePosts] = useState([])
    useEffect(() => {   
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setRealtimePosts(
                snapshot.docs.map((doc)=>({
                    id : doc.id,
                    data : doc.data()
                }))
            )
        })
    }, [])
    return (
        <div>
            {realtimePosts.map((post)=>( 
                <Post
                key={post.id}
                {...post.data}
                />
            ))}
        </div>
    )
}

export default Posts
