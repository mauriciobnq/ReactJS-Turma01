import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { busca } from "../api/api";
import '../assets/css/post.css';

const Post = () =>{
    let history = useNavigate()
    const { id } = useParams()
    const[post, setPost] = useState([])

    useEffect(() => {
        busca(`/posts/${id}`, setPost)
        .catch(()=>{
            history.push('/404')
        })
    }, [id])

    return(
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <h3 className="cartao-post__meta">{post.metadescription}</h3>
                <br />
                <p className="cartao__texto">{post.body}</p>
            </article>

        </main>
    )
}

export default Post