/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ImageRow = ({ images }) => {
    return (
        <div 
            style={{
                display: 'flex',              // Aligns child elements (memes) in a row
                justifyContent: 'space-between', // Spreads memes evenly across the row
                alignItems: 'center',          // Vertically centers the memes
                marginBottom: '60px',          // Adds space below the row
                fontSize: '48px'               // Sets a large font size for labels
            }}
        >
            {/* Map through the images array and render each meme image and its label */}
            {images.map((image, index) => (
                <div 
                    key={index}  // Unique key for each image div (index from map)
                    style={{ textAlign: 'center' }} // Centers the content (label, image)
                >
                    {/* Label for each meme with a dynamic index */}
                    <label htmlFor={`checkbox${index + 1}`}>
                        Meme {index + 1}      {/* Displays "Meme 1", "Meme 2", etc. */}
                    </label>
                    <br />
                    {/* Render the image, using the src from the images array */}
                    <img 
                        src={image.src}      // The source URL for the image
                        alt={`Meme ${index + 1}`}  // Alt text for accessibility
                        style={{ 
                            width: '300px',  // Sets the image width to 300px
                            height: 'auto',  // Adjusts height to maintain aspect ratio
                            objectFit: 'cover' // Ensures the image fills the container properly
                        }} 
                    />
                    <br />
                </div>
            ))}
        </div>
    );
};

export default ImageRow;
