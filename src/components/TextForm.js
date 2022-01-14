import React ,{useState} from 'react'

export default function TextForm(props) {


  const [text, setText] = useState('Enter text here');
  const handleOnChange = (event)=>{
        setText(event.target.value);
     }
  return (
    <>
    <div className='container'>
     <div className="form-group">
     <h1 style={props.mode==='light'?{color:'#042743'}:{color:'white'}}>{props.heading}</h1>
<textarea className="form-control"  value={text} onChange={handleOnChange} id="textbox"  rows="8" style={props.mode==='light'?{backgroundColor:'white',color: '#042743'}:{backgroundColor:'grey',color:'white'}}></textarea>
  </div>
  <div>
      <button disabled={text.length==0} className="btn btn-primary my-3" onClick={() =>{ setText(text.toUpperCase());
      props.alert("converted to upper case","success");}}>
        Convert to Uppercase
      </button>
      <button disabled={text.length==0} className="btn btn-primary my-3 mx-2" onClick={() =>{ setText(text.toLowerCase());
      props.alert("converted to lower case","success");}}>
        Convert to Lowercase
      </button>
      <button disabled={text.length==0} className="btn btn-primary my-3 mx-2" onClick={() =>{ setText("");
      props.alert("Text Cleared","success");}}>
        Clear
      </button>
      <button disabled={text.length==0} className="btn btn-primary my-3 mx-2" onClick={() => {
      navigator.clipboard.writeText(text);
      props.alert("Text Copied","success");;}}>
        Copy Text
      </button>
      <button disabled={text.length==0} className="btn btn-primary my-3 mx-2" onClick={() => {
        let ptext = navigator.clipboard.readText();
        ptext.then(txt => { setText(txt);  });
        props.alert("Text Pasted","success");
      }}>
       Paste
      </button>
      </div>
      
    </div>
    <div className='container my-2'style={props.mode==='light'?{color:'#042743'}:{color:'white'}}>
    <h1 >Your text summary</h1>
    <p  > {((text.trim().split(/\s+/)).filter(function (element) {
                    return element !== ""; })).length} words, {text.length} characters</p>
    <p >{0.008*text.length} minutes read</p>
    <h2 >Preview</h2>
    <p >{text.length>0?text:"enter something to preview"}</p>
    </div>
    </>

  );
}
