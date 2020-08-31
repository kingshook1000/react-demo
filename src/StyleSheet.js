import React from 'react'
import './MyStyle.css'

function StyleSheet(props) {
    let className = props.primary ? "primary" : '';
    const placeHolderText = "Enter your name";
    function createMarkup() {
        return {__html: 'First &middot; Second'};
      }
    const greeting = "Hello There";
    const heading = {
        fontSize: '30px',
        color: 'blue'
    }
    return (
        <div>
            <h1 className={`${className} font-xl`}>Style</h1>
            <h1 style={heading}>Inline</h1>
            <p dangerouslySetInnerHTML={createMarkup()}></p>
            <input type="text" placeholder={placeHolderText} />
        </div>
    )
}

export default StyleSheet
