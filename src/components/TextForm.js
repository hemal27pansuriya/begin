import React, { useState } from 'react'

export default function TextForm(props) {
    const { mode, showAlert } = props
    const handleUpClick = () => {
        let upText = text.toUpperCase()
        setText(upText)
        showAlert('Converted to uppercase!', 'Success')
    }
    const handleLoClick = () => {
        let loText = text.toLowerCase()
        setText(loText)
        showAlert('Converted to Lowercase!', 'Success')
    }
    
    const handleReClick = () => {
        let reText = text.split(' ').reverse().join(' ')
        setText(reText)
        showAlert('Text reversed!', 'Success')
    }

    const handleClearText = () => {
        setText('')
        showAlert('Text cleared!', 'Success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className='container' style={{color: mode === 'dark' ? 'white' : 'black'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: mode === 'dark' ? 'rgb(6 68 116)' : 'white', color: mode === 'dark' ? 'white' : 'black'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}> Convert to Uppercase </button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}> Convert to Lowercase </button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleReClick}> Reverse Your Words </button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearText}> Clear Text </button>
            </div>
            <div className='container my-3' style={{color: mode === 'dark' ? 'white' : 'black'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(' ').filter(e=>e.length!==0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter(e=>e.length!==0).length} Minutes read</p>
                <h5>Preview</h5>
                <p>{text || 'Enter text above to see preview!'}</p>
            </div>
        </>
    )
}
