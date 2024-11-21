import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted the text into the upperCase", "success")
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted the text into the LowerCase", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleGrammarCorrect = () => {
    let newText = text
      .split('. ')
      .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join('. ');
    setText(newText);
    props.showAlert("First letter corrected", "success")
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myText.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
    props.showAlert("Downloaded the text successfully", "success")
  };

  const handleClear = () => {
    setText('');  // Resets the text to an empty string
    props.showAlert("cleared the text in the box", "success")
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" style = {{color: props.mode === 'dark'? 'white': '#042743'}}>
        <h1 my-2>{props.heading}</h1>
        <div className="mb-4">
          <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark'? '#13466e': 'white', color: props.mode === 'dark'? 'white': '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoclick}>Convert to Lowercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleGrammarCorrect}>Capitalise</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownload}>Download Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear text</button>
      </div>
      <div className="container my-3" style = {{color: props.mode === 'dark'? 'white': '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
