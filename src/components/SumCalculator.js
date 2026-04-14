import React, { useEffect, useState } from 'react'

const SumCalculator = () => {
    let [sum , setSum] = useState(0);
    let [sum2 , setSum2] = useState(0);

    useEffect(()=>{
        setSum((pre)=>pre+sum2);
    },[sum2]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type='number' onChange={(e)=>setSum2(Number(e.target.value))}/>
      <p>sum: {sum}</p>
    </div>
  )
}

export default SumCalculator
