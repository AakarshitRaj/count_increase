import React ,{useState} from 'react'

function Submit() {
    const  [submit,setSubmit]=useState('apple')
    const [inputText,setInputText]=useState('');

    const updateSubmit=()=>{
      setSubmit(inputText);
    }
    function updateInputText(event){
      const curInputValue=event.target.value;
      setInputText(curInputValue);
    }
  return (
    <>
    <p>the value of Submit is {submit}</p>
    <input type="text" onChange={updateInputText} />
    {/* <button onClick={()=>setsubmit('papaya')}>papaya</button>
    <button onClick={()=>setSubmit('mango')}>mango</button> */}
    <button onClick={()=>updateSubmit()}>submit</button>
    </>
  );
}

export default Submit