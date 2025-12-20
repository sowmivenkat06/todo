import { useState } from "react";
import Card from "../components/Card.jsx";

function TodoPage() {
   const [title, setTitle] = useState("");
   const [desc,setDesc]=useState("");
   const [items, setItems] = useState([]);

   function handleAdd(){
    if(title.trim()!="" && desc.trim()!=""){
        let obj={
            title:title,
            desc:desc
        };
        items.push(obj);
        setItems([...items]);
        setTitle("");
        setDesc("");
        }
   }

   function handleDelete(idx){
    let temp=[];
    for(let i=0;i<items.length;i++){
        if(i!=idx){
            temp.push(items[i]);
        }
    }
    setItems(temp);
   }

   function handleEdit(idx){
    const newTitle=prompt("Enter new title");
    const newDesc=prompt("Enter new description");
    if(newTitle !=null && newTitle.trim()!="" && newDesc !=null && newDesc.trim()!=""){
        let temp=[];
        for(let i=0;i<items.length;i++){
            if(i==idx){
                let newObj={
                    title:newTitle,
                    desc:newDesc
                };
                temp.push(newObj);
            } else {
                temp.push(items[i]);
            }
        }
        setItems(temp);
    }
    else alert("Invalid field");
   }

    return (
        <>
            <main className="font-mono w-screen min-h-screen flex flex-col items-center bg-gradient-to-br from-violet-300 to-purple-400 py-10 gap-6">
                
                <h1 className="font-extrabold uppercase text-3xl text-gray-800 tracking-wide">
                    To-Do Application
                </h1>

                <section className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
                    
                    <input
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        type="text"
                        placeholder="Enter title"
                        className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />

                    <textarea
                        rows={5}
                        value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                        placeholder="Enter description"
                        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />

                    <button
                        className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition-colors"
                        onClick={handleAdd}
                    >
                        Add Task
                    </button>
                </section>

                <section className="flex flex-wrap justify-center gap-4 w-full px-4">
                    {
                        items.map((value,index)=>{
                            return (
                                <Card
                                    key={index}
                                    id={index+1}
                                    title={value.title}
                                    desc={value.desc}
                                    handleDelete={handleDelete}
                                    handleEdit={handleEdit}
                                />
                            );
                        })
                    }
                </section>
            </main>
        </>
    );
}

export default TodoPage;
