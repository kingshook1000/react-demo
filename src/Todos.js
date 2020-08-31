import React from 'react';
//Destructuring and renaming variables
const Todos = ({todos, deleteTodo})=>{
    const todoList = todos.map((todo, index) => {
        const {id, content: item} = todo;
        return (
            <div className="collection-item" key={id}>
                <span onDoubleClick={()=>{deleteTodo(id)}}>{item}</span>
            </div>
        )
    })
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}
export default Todos;