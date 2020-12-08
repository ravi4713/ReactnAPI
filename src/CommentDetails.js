import React from 'react';


const CommentDetails = (props) =>{
    return (
        <div className="comment">
                <a href='/' className='avatar' >
                    <img alt='avatar' src={props.imgSrc} />
                </a>
                <div className="content">
                    <a href='/' className ='author'>
                        {props.author}
                    </a>
                    <div className='metadata'>
                        <span className='date'>{props.timeAt}</span>
                    </div>
                    <div className='text'>{props.comment}</div>
                </div>
            </div>
    );
}

export default CommentDetails;