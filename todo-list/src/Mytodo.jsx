import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function TodoInput() {
    const [todoName, setTodoName] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const handleAddTodo = (newTodo) => {
        console.log(newTodo)
        setTodoList([...todoList, { id: todoList.length + 1, ...newTodo }]);
    };
    const handleAddClick = () => {
        console.log(todoDescription)
        console.log(todoName)
        if (todoName && todoDescription) {
            handleAddTodo({
                name: todoName,
                description: todoDescription,
                status: 'Not Completed' // Default status
            });
            setTodoName('');
            setTodoDescription('');
        }
    };
    const [todoList, setTodoList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editTodoId, setEditTodoId] = useState(null);


    const handleEdit = (id) => {
        const todoToEdit = todoList.find(todo => todo.id === id);
        if (todoToEdit) {
            setTodoName(todoToEdit.name)
            setTodoDescription(todoToEdit.description)
            setEditMode(true);
            setEditTodoId(id);
        }
    };

    const handleSaveEdit = (updatedTodo) => {
        const updatedTodoList = todoList.map(todo => (todo.id === editTodoId ? { id: todo.id, ...updatedTodo } : todo));
        setTodoList(updatedTodoList);
        setEditMode(false);
        setEditTodoId(null);
        setTodoName('');
        setTodoDescription('');
    };

    const handleDelete = (id) => {
        const updatedTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(updatedTodoList);
    };

    useEffect(() => {
        console.log(todoList);
    }, [todoList]);
    return (
        <div className='text-center py-2 my-5'>
            <h3>My To-Do</h3>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-5">
                        <div className="todoInput mx-5 py-5">
                            <input type='text' placeholder='To-do name' style={{ marginRight: '10px', width: '40%', height: '40px' }} value={todoName} onChange={(e) => setTodoName(e.target.value)} />
                            <input type='text' placeholder='To-do Description' style={{ marginRight: '10px', width: '40%', height: '40px' }} value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)} />
                            <button type="button" className="btn btn-success" onClick={editMode ? () => handleSaveEdit({ name: todoName, description: todoDescription }) : handleAddClick}>{editMode ? 'Edit Todo' : 'Add Todo'}</button>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row">
                        {todoList.map(todo => (
                            <div className="card col-4 mx-2 my-2" key={todo.id}>
                                <div className="card-body my-5">
                                    <h5 className="card-title"><b>Title :</b> {todo.name}</h5>
                                    <p className="card-text"><b>Description</b> {todo.description}</p>
                                    <button className="btn btn-primary mx-5" onClick={() => handleEdit(todo.id)}>Edit</button>
                                    <button className="btn btn-primary" onClick={() => handleDelete(todo.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoInput;
