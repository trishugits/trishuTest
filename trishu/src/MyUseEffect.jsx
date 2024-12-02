import React, { useEffect } from 'react'

function MyUseEffect() {
    const [count, setCount] = React.useState(10);
    useEffect(()=>{
        console.log('useEffect is running');
    })
    function DoIncrement() {
        setCount(count + 10);
    }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={DoIncrement}>Increment</button>
    </div>
  )
}

export default MyUseEffect