import React from 'react'
import './imagelist.css'
import './imageCard';
import ImageCard from './imageCard';

const Imagelist = (props)=>{
    const imagesurls = props.images.map((image)=>{
        return <ImageCard  key={image.id} image={image}/>
    })
    return (
        <div>
            images : {props.images.length}
            <div className='image-list'>{imagesurls}</div>
            
        </div>

    )
}

export default Imagelist;