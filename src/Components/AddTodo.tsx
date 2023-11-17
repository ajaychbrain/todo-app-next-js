"use client"
import React, { useState } from 'react';

interface Todo {
  todo: string;
}

const AddTodo = () => {
  const [todo, setTodo] = useState<string>("");
  const [data, setData] = useState<Todo[]>([]);
  const [edit, setEdit] = useState(false);
  const [updateTodo, setUpdateTodo] = useState<any>("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   if(edit)
   {
    const updateData = data;
    let obj: Todo = { todo };
            Object.assign(updateData[updateTodo],obj)
            setData([...updateData]);
            setEdit(false)
            setTodo("");

   }
   else{
    let obj: Todo = { todo };
    setData([...data, obj]);
    setTodo("");
   }
  }
console.log(data,"My Data");
const deleteTodo = (index:number)=>{
    console.log(index)
    const filterTodo = data.filter((item ,i)=>i!==index)
    setData(filterTodo);
    console.log(data, "Data Deleted");
}

const editTodo = (index:number)=>{
    console.log(index);
    const tempTodo = data[index];
    setTodo(tempTodo.todo);
    setEdit(true);
    setUpdateTodo(index);

}



  return (
            <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={todo} onChange={(e:any)=> setTodo(e.target.value)}    />
                <button type='submit'>
                    {edit? "Update": "Submit"}
                </button>
            </form>
                <h2>Todo List</h2>
                {
                    data.map((item:any, id:number)=>{
                        return(
                            <>
                            <table border={2}>
                            <tr>
                                <td key={id}>
                                    {id+1}
                                </td>
                                <td>{item.todo}</td>
                                <td>
                                    <button onClick={()=>editTodo(id)}>Edit</button>
                                    <button onClick={()=>deleteTodo(id)}>Delete</button>
                                </td>
                                
                            </tr>
                            </table>
                            </>
                        )
                    })
                }
            
            </>
  )
}

export default AddTodo
