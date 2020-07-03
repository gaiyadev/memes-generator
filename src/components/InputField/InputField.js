import React from 'react';
const inputField = (props) => {
    return (
        <div className="meme-form">
            <input
                type="text"
                name="topText"
                placeholder="Enter top text"
                onChange={props.change}
                value={props.topValue}
            />
            <br />
            <input
                type="text"
                name="bottomText"
                placeholder="bottom text"
                onChange={props.change}
                value={props.btnValue}
            />
            <br />
            <input
                type="number"
                name="font_size"
                placeholder="font size"
                onChange={props.change}
                value={props.textValue}
            />
            <button onClick={props.click}>Generate!</button>
        </div>
    );
}

export default inputField;