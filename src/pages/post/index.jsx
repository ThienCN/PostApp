import React, { useEffect, useState } from 'react'
import PostItem from '../../components/PostItem'
import { Modal, Button } from 'react-bootstrap'
import './styles.css'

const Post = () => {
    const [posts, setPosts] = useState([])
    const [show, setShow] = useState(false)
    const [comments, setComments] = useState([])
    const [postDetail, setPostDetail] = useState({})

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        fetch('https://gorest.co.in/public/v1/posts')
            .then(response => response.json())
            .then(response => {
                const { data } = response
                if (data && data.length) setPosts(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    const handleViewDetail = (id, title, description) => {
        setShow(!show)

        fetch('https://gorest.co.in/public/v1/posts/5/comments')
            .then(response => response.json())
            .then(response => {
                console.log('response', response)
                const { data } = response
                if (data && data.length) setComments(data)
            })
            .catch(error => {
                console.log(error)
            })

        setPostDetail({
            title,
            description
        })
    }

    return (
        <div className="container">
            <h1 className="title">Posts</h1>
            {!!posts.length && posts.map(item =>
                <PostItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.body}
                    show={show}
                    setShow={setShow}
                    handleViewDetail={handleViewDetail}
                />
            )}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h3>{postDetail.title}</h3>
                    <p>{postDetail.description}</p>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Post