import React ,{useState} from 'react'

function Fruits() {
    const  [fruit,setFruit]=useState('apple');
  return (
    <>
    <p>the value of fruits is {fruit}</p>
    <button onClick={()=>setFruit('papaya')}>papaya</button>
    <button onClick={()=>setFruit('mango')}>mango</button>
    <button onClick={()=>setFruit('banana')}>banana</button>
    </>
  );
}

export default Fruits