import React from 'react';

const Post = (props) => {
    return (
        <div className='postContent'>
            <img className='ava' src={props.author.photo} />
            <div className='content'>
                <div className='contentText'>
                    <p className='name'>{props.author.name}</p>
                    <p className='nickName'> {props.author.nickname}</p>
                    <p className='date'> • {props.date}</p>
                </div>
                <p className='content'>{props.content}</p>
                <img className='image' src={props.image} />
            </div>
        </div>
    )
}

export default Post;