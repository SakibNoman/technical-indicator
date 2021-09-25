import React from 'react';

const Options = ({ value, options, handleChangeAgain, index }) => {
    let newValue = value.toUpperCase();
    return (
        <select value={newValue} onChange={(e) => handleChangeAgain(e, index)} name="option" id="option">
            {
                options.map(each =>
                    <option value={each}>{each}</option>
                )
            }
        </select>
    );
};

export default Options;