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
    const handleClearTextClick = () => {
        let newText = '';
        setText(newText);

    }
    const handleCopy = () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () =>{
        //Regex
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event) => {
        // console.log('handleOnChnage');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
                <h1 className='my-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <button className="btn btn-info m-2 text-dark " onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-info m-2 text-dark" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
                <button className="btn btn-info m-2 text-dark" onClick={handleClearTextClick}>Clear text</button>
                <button className="btn btn-info m-2 text-dark" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-info m-2 text-dark" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <div className="row">
                <div className="section2 col-8 ">
                        <h2 className='my-3'>Preview</h2>
                        <p>{text.length>0?text:'Enter something in the textbox above to preview it'}</p>
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
