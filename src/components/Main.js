import { useState } from "react";
import Article from "./Article";
import './Main.css';
import Form from "./Forms";
function Main(){
    const [todo, setTodoList]=useState([
        {title: "learn React", priority:"high", visible:true},
        {title:"learn c++", priority:"medium", visible: true},
        {title:"learn data structure", priority:"low", visible: true},
        {title:"math", priority:"high", visible: true}
    ]); 
    const SaveDataHandler= (todoTitle)=>{
        setTodoList((prevState)=>{
            return([...prevState,{title:todoTitle.Title, priority:todoTitle.Priority, visible:true}]); 
        }); 
        console.log(todoTitle);
    }

    const deleteItem =(detedTitle)=>{
        const newState = todo.map(obj => {
             if (obj.title === detedTitle) {
               return {...obj, visible:false};
             }
             return obj;
           });
           const todoFilter = newState.filter((item)=>{
            return(item.visible === true);
        })
          setTodoList(todoFilter);
          console.log("done");
    
     };


    return(
        <main>
            <Form onSaveData = {SaveDataHandler}></Form>
            <div className='main-h3'><h3>To-do List</h3></div>
            <div className="main-rtcl">
                {
                    todo.map((item) => (
                        <Article onDeleteItem = {deleteItem}
                        title={item.title}
                         priority={item.priority}>
                         </Article>
                    )) 
                }
            </div>
           
        </main>
    );
}
export default Main;