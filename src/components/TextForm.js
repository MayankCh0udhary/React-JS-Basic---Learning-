import React, { useState } from 'react'
// import PropTypes from 'prop-types' 

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        // console.log('handleUpperCaseClick is clicked!' + text);
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleOnChange = (event) => {
        // console.log('handleOnChnage');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <h1 className='my-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <buttom className="btn btn-info mx-2 text-dark " onClick={handleUpperCaseClick}>Convert to Uppercase</buttom>
                <buttom className="btn btn-info mx-2 text-dark" onClick={handleLowerCaseClick}>Convert to LowerCase</buttom>
            </div>
            <div className="container">
                <div className="row">
                <div className="section2 col-8 ">
                        <h2 className='my-3'>Preview</h2>
                        <p>{text}</p>
                    </div>
                    <div className="section1 col-3 ms-5">
                        <h4 className='my-3'>Your text summary</h4>
                        <p>{text.split(" ").length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").length} Minutes read</p>
                    </div>

                </div>
            </div>
        </>
    )
}

TextForm.defaultProps = {
    heading: "Enter the text to analyze below"
}
