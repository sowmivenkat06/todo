import { useState } from "react";

function TodoPage(){
    const[inputValue,setInputValue]= useState("");

    function handleInput(event){
        const value= event.target.value;
        setInputValue(value);
    }
    return(
        <>
         <main>
            <h1>To Do Application</h1>

            <section>
                <input value={inputValue} onChange={handleInput} type="text" />
                <button className="bg-red-400">Add</button>
            </section>
            <section>
                <ol>
                    <li>Input: {inputValue}</li>
                </ol>
            </section>
         </main>
        </>
    );
}
export default TodoPage;