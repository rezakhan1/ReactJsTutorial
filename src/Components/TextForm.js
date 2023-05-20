 
import React, {useState} from 'react'

export default function TextForm(prop) {
    const [text,setText]= useState('')
    const increaseCount=(event)=>{ 
     setText(event.target.value)
    }
   const ChangeToUpperCase=() =>{
    let newText=text.toLocaleUpperCase();
    setText(newText);
    prop.showAlert("Changed To Uppercase","success")
   }
   const ChangeToLowerCase=() =>{
    let newText=text.toLocaleLowerCase();
    setText(newText)
    prop.showAlert("Changed To Lowercase","success")
   }
   const RemoveExtraSpace=() =>{
    let newText= text.replace(/\s{2,}/g, ' ').trim()  //text.toLocaleLowerCase();
    setText(newText)
    prop.showAlert("Removed Extra spaces","success")
   }
   const ClearText=()=>{
    setText('')
    prop.showAlert("Cleared","success")
   }
  return (
    <>   
  <div className="container" style={{color: prop.mode==='dark'?'white':'#042743'}}> 
  <h1 className='mb-4'>{prop.heading}</h1> 
    <textarea className="form-control" value={text}  id="exampleFormControlTextarea1" 
     onChange={increaseCount} style={{backgroundColor: prop.mode==='dark'?'#13466e':'white', color: prop.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
     
    <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={ ChangeToLowerCase}>ToLowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={ChangeToUpperCase}>ToUpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={ClearText}>Clear</button>
    <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={RemoveExtraSpace}>Remove Extra Space</button>
  </div>
  <div className="container my-3" style={{color: prop.mode==='dark'?'white':'#042743'}}>
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").filter((el)=>{ return el.length>0}).length} of Words and {text.length} of Characters</p>
    <p>{text.split(" ").filter((el)=>{ return el.length>0}).length * 0.008} Minutes to Read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
  </div>
  </>
  )
}
