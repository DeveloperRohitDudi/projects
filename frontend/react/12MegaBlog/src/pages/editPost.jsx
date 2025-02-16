import React, { useState, useEffect } from 'react'
import { Container, PostForm } from '../components'
import dbService from '../appwrite/dbConfig'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {

    const [post, setPost] = useState(null)
    //it must be null initially, not object. fuck off
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            dbService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                }
                else {
                    navigate('/')
                }
            })
        }
        else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null

}

export default EditPost