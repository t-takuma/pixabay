import React from "react";
import Masonry from 'react-masonry-component';


const ImageList = (props) => {
    const images = props.iamges.map((image) => {
        return (
            <a href={image.pageURL} key={image.id} target='_blank' rel='noopener noreferrer' className="ui medium image">
                <img src={image.webformatURL} alt={image.tags}></img>
            </a>
        );
    });
    return (
        <Masonry className="image-list">{images}</Masonry>
    );
};

export default ImageList;