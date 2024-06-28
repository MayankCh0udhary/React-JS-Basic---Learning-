import React, { useState } from 'react'
// import PropTypes from 'prop-types' ;
// import TextField from '@mui/material/TextField';

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
    const handleCopy = () => {
        // This is used for the textarea
        let text = document.getElementById('myBox');

        // This is used for the TextField
        // let text = document.getElementById('outlined-multiline-flexible');

        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard!', 'success');
    }
    const handleExtraSpaces = () => {
        //Regex
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange = (event) => {
        // console.log('handleOnChnage');
        setText(event.target.value);
    }
    const handleTextCount = () => {
        let textCount = text.split(" ").length;
        console.log(textCount);
        return textCount;
    }

    // let inpt = () =>{
    //     let inputStyle = document.getElementById('outlined-multiline-flexible');
    //     return inputStyle;
    // };
    // console.log(inpt.inputStyle); 
    // inputStyle.style.setAttribute('heigth: 300px !important'); 

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1 className='my-4'>{props.heading}</h1>
                <div className="mb-3">
                    {/* <TextField id="outlined-multiline-flexible" label={props.heading} placeholder="Text" multiline fullWidth maxRows={4} className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white'}}
                    /> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white', border: props.mode === 'light' ? '1px solid black' : '1px solid white' }}></textarea>
                </div>
                <button className="btn btn-info m-2 text-dark " onClick={handleUpperCaseClick}>Convert to Uppercase</button>
                <button className="btn btn-info m-2 text-dark" onClick={handleLowerCaseClick}>Convert to LowerCase</button>
                <button className="btn btn-info m-2 text-dark" onClick={handleClearTextClick}>Clear text</button>
                <button className="btn btn-info m-2 text-dark" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-info m-2 text-dark" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div className="row">
                    <div className="section2 col-lg-8 col-sm-12">
                        <h2 className='my-3'>Preview</h2>
                        <p className=' text-wrap'>{text.length > 0 ? text : 'Nothing to Preview!'}</p>
                    </div>
                    <div className="section1 col-lg-3 col-sm-12 ms-lg-5">
                        <h4 className='mt-3' onClick={handleTextCount}>Your text summary</h4>
                        <p>{text.split(/\s+/).filter((element)=>{ return element.length !== 0 }).length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(" ").filter((element)=>{ return element.length !== 0 }).length} Minutes read</p>
                    </div>

                </div>
            </div>
        </>
    )
}

TextForm.defaultProps = {
    heading: "Enter the text to analyze below"
}
