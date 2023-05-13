 
import React, {useState} from 'react'

export default function TextForm() {
    const [text,setText]= useState('Enter Your Text')
    const increaseCount=(event)=>{ 
     setText(event.target.value)
    }
   const ChangeToUpperCase=() =>{
    let newText=text.toLocaleUpperCase();
    setText(newText)
   }
   const ChangeToLowerCase=() =>{
    let newText=text.toLocaleLowerCase();
    setText(newText)
   }
   const RemoveExtraSpace=() =>{
    let newText= text.replace(/\s{2,}/g, ' ').trim()  //text.toLocaleLowerCase();
    setText(newText)
   }
   const ClearText=()=>{
    setText('')
   }
  return (
    <>   
  <div className="container"> 
    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control" value={text}  id="exampleFormControlTextarea1" rows="3" onChange={increaseCount}></textarea>
     
    <button className="btn btn-primary mx-2 my-2" onClick={ChangeToUpperCase}>ToLowerCase</button>
    <button className="btn btn-primary mx-2" onClick={ChangeToLowerCase}>ToUpperCase</button>
    <button className="btn btn-primary mx-2" onClick={ClearText}>Clear</button>
    <button className="btn btn-primary mx-2" onClick={RemoveExtraSpace}>Remove Extra Space</button>
  </div>
  <div className="container">
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").length} of Words and {text.length} of Characters</p>
    <p>{text.split(" ").length * 0.008} Minutes to Read</p>
    <h3>Preview</h3>
    {text}
  </div>
  </>
  )
}
