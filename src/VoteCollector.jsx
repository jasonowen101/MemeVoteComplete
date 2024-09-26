/* eslint-disable react/prop-types */ 
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const VoteCollector = () => {
    // useState hook to store the currently selected meme, initial value is null (no meme selected)
    const [selectedMeme, setSelectedMeme] = useState(null);

    // Function to handle checkbox changes, it updates the selectedMeme state to the value of the selected meme
    const handleCheckboxChange = (value) => {
        setSelectedMeme(value);
    };

    return (
        <div style={{ fontSize: '48px' }}> 
            {/* Label for meme selection */}
            <label htmlFor="memeSelection">Which Meme is the Best</label>
            <br />

            {/* Checkbox for Meme 1 with an onChange handler to update selectedMeme state */}
            <input  
                type="checkbox"   // Checkbox input type
                id="meme1"        // Unique identifier for the checkbox
                name="memeSelection" // Grouping name for checkboxes
                value="Meme 1"    // The value passed when this checkbox is checked
                style={{ zoom: '3' }}  // Increase the checkbox size
                checked={selectedMeme === "Meme 1"} // Boolean: true if selectedMeme is 'Meme 1', ensures only one checkbox can be checked
                onChange={() => handleCheckboxChange('Meme 1')} // When checked, call handleCheckboxChange with 'Meme 1'
            />
            {/* Label for Meme 1 */}
            <label htmlFor="meme1">Meme 1</label>

            {/* Checkbox for Meme 2, same structure as Meme 1 */}
            <input  
                type="checkbox"
                id="meme2"
                name="memeSelection"
                value="Meme 2"
                style={{ zoom: '3' }}
                checked={selectedMeme === "Meme 2"}
                onChange={() => handleCheckboxChange('Meme 2')}
            />
            <label htmlFor="meme2">Meme 2</label>

            {/* Checkbox for Meme 3, same structure as Meme 1 */}
            <input  
                type="checkbox"
                id="meme3"
                name="memeSelection"
                value="Meme 3"
                style={{ zoom: '3' }}
                checked={selectedMeme === "Meme 3"}
                onChange={() => handleCheckboxChange('Meme 3')}
            />
            <label htmlFor="meme3">Meme 3</label>
        </div>
    );
};

export default VoteCollector;
