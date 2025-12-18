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
    );
}
export default Counter;