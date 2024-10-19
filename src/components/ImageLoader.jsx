import React from 'react';

const getImage = (imageName) => {
    try {
        console.log(new URL(`../assets/images/${imageName}`, import.meta.url).href)
        return new URL(`../assets/images/${imageName}`, import.meta.url).href;
    } catch (error) {
        console.error("Image not found:", imageName);
        return "";
    }
};

const ImageLoader = ({ imageName, altText, className }) => {
    const imageSrc = getImage(imageName);

    return (
        <img src={imageSrc} className={className} alt={altText} />
    );
};

export default ImageLoader;
