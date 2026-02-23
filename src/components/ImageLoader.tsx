import React from 'react';

const getImage = (imageName: string): string => {
    try {
        return new URL(`/assets/images/${imageName}`, import.meta.url).href;
    } catch (error) {
        console.error("Image not found:", imageName);
        return "";
    }
};

interface ImageLoaderProps {
    imageName: string;
    altText: string;
    className?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({ imageName, altText, className }) => {
    const imageSrc = getImage(imageName);

    return (
        <img src={imageSrc} className={className} alt={altText} />
    );
};

export default ImageLoader;
