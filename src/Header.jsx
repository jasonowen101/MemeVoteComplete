/* eslint-disable react/prop-types */ 
/* eslint-disable no-unused-vars */
import React from 'react';

const Header = () => {
    return (
        <div 
            style={{
                backgroundColor: 'green',   // Sets the background color of the header
                width: '100%',              // Ensures the header takes up the full width of the screen
                textAlign: 'center',        // Centers the text horizontally
                padding: '10px 0',          // Adds vertical padding to the header
                color: 'white'              // Sets the text color to white
            }}
        >
            {/* Main heading for the header */}
            <h1 
                style={{ fontSize: '24px' }}  // Sets the font size of the heading
            >
                Vote for the Best Meme        {/* Text displayed in the heading */}
            </h1>
        </div>
    );
};

export default Header;
