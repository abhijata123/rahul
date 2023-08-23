import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext)
      props.showAlert("Converted to lowercase","success")
    }
    const handleThanksClick=()=>
    {
      let newtext="Thanks a lot for ".concat(text);
      setText(newtext);
    }
    const handleOnChange=(event)=>
    {
        console.log("Onchange was clicked");
        setText(event.target.value)
    }
    const [text,setText]=useState("Enter text here");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <form>
  <div className="mb-3">
    <label  className="form-label">Text Area</label>
    <input type="text" className="form-control" id="exampleText" aria-describedby="emailHelp" value={text} onChange={handleOnChange}/>
    <div id="emailHelp" className="form-text">We'll never share your text with anyone else.</div>
  </div>
  <button type="submit" onClick={handleUpClick} className="btn btn-primary mx-2">Convert to UpperCase</button>
  <button type="submit" onClick={handleLowClick} className="btn btn-primary mx-2">Convert to LowerCase</button>
  <button type="submit" onClick={handleThanksClick} className="btn btn-primary mx-2">Receive Thanks</button>
</form>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter(word => word !== '').length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length} minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Please enter something to preview it "}</p>

    </div>
    </>
  )
}
