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
    );
}
export default Counter;