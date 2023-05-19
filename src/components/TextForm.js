import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>
    {
        console.log("handle up clicked "+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Success","Converted to upper case")
    }
    const handleLoClick= ()=>
    {
        // console.log("handle lower clicked "+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Success","Converted to lower case")
    }
    const handleClearClick= ()=>
    {
        // console.log("handle lower clicked "+text)
        let newText="";
        setText(newText)
        props.showAlert("Success","Text cleared")

    }
    const handlExClick= ()=>
    {
        // console.log("handle lower clicked "+text)
        let newText=text.toLowerCase();
         
          
        setText(newText.replace(/\s{2,}/g, ' ').trim() )
        props.showAlert("Success","Extra spaces cleared")

    }
    const handleOnChange= (event)=>
    {
        console.log("On change")
        setText(event.target.value)
    }
    const handleCopy= ()=>
    {
        // console.log("handle lower clicked "+text)
            let newText = document.getElementById("myBox");
            newText.select();
            document.execCommand('copy');
            props.showAlert("Success","Text copied to clipboard")
    }
    const [text, setText] = useState("");
  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'#0f032a'}}>
        <h1> {props.heading}</h1>
  
<div className="mb-3">
  {/* <label for="myBox" className="form-label">Please enter your text below</label> */}
  <textarea className="form-control my-3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#0f032a':'white',color:props.mode==='dark'?'white':'#0f032a'}}id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1  ' onClick={handleUpClick}>Convert to upperCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to lowerCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlExClick}>Clear Extra Spaces</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear text</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
<div className="container my-3">
<h1> Your text summary</h1>
<p> Words {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Characters {text.length}</p>
<p> {0.008*(text.split(/\s+/).filter((element)=>{return element.length!==0})).length} minutes read</p>
<h4> Preview</h4>
<p> {text.length>=1?text:'Nothing to preview'}</p>
</div>

    </div>
  )
}
