import React from 'react';
import "./ImagesList.css";
import ImageCards from './ImageCards';

const ImagesList = ( props ) => {

    const images = props.images.map((image) =>{
        return <ImageCards key={image.id} image={image} />
    });

    return <div className='image-list'>{images}</div>;
};

export default ImagesList;