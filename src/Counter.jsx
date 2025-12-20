<<<<<<< HEAD
import { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    function handleclick() {
        setCount(count + 1);
    }
    function decrement(){
        setCount(count - 1);
    }
    return (
        <>
        <div className="text-center  m-2 bg-white shadow-gray-600 shadow-md rounded-md w-fit p-2">
        <h1 className="text-blue-600">Count: {count}</h1>
            <button className="rounded-sm px-3 active:shadow-sm shadow-md shadow-gray-500 p1 bg-gray-300" onClick={handleclick}>Increment</button>
            <button className="rounded-sm px-3 active:shadow-sm shadow-md shadow-gray-500 p1 bg-gray-300" onClick={decrement}>Decrement</button>
            </div>
        </>
=======
import { useState} from "react";
function Counter(){
    const[count,setCount]=useState(0);
    function inc(){
        setCount(count+1);
    }
     function dec(){
        setCount(count-1);
    }
    return (
        <>
        <div className="m-2 bg-sky-300 w-fit p-2">
<h1 className="text-red-500">Count: {count}</h1>
        <button className="rounded-sm border-2 p-2 m-2 bg-gray-300"onClick={inc}>inc </button><br></br>
                        <button className="rounded-sm border-2 p-2 m-2 bg-gray-300" onClick={dec}>dec</button>
   </div>
   </>
>>>>>>> 81f739068d985acb09a768403352e5df245c1a10
    );
}
export default Counter;