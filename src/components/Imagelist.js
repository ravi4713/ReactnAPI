import React from 'react'
import './imagelist.css'
import './imageCard';
import ImageCard from './imageCard';

const Imagelist = (props)=>{
    const a = [1,2 ,3 ,4,5]
    const imagesurls = props.images.map((image)=>{
        return <ImageCard  key={image.id} image={image}/>
    })
    console.log(imagesurls )
    return (
        <div>
            images : {props.images.length}
            <div className='image-list'>{imagesurls}</div>
            
        </div>

    )
}

export default Imagelist;