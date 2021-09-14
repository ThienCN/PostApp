import React from 'react'
import './styles.css'

const UserComment = ({ title, description, image }) => {

    return (
        <div className="row">
            <div className="post-content">
                <h3 className="post-title">{title}</h3>
                <p className="post-description">{description}</p>
            </div>
            <div className="post-image">
                <img className="image" src="https://salt.tikicdn.com/cache/w1080/ts/banner/bc/a5/80/0a1bfb78c81ccc2e73043acc6cc37967.png" alt="postImage"/>
            </div>
        </div>
    )
}

export default UserComment