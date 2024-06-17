import React from 'react'
function Cards({ todo, handleEdit, handleDelete }) {
    return (
        <div className="card col-4 py-4">
            <div className="card-body">
                <div className="card-text">
                    <h5>Name: {todo.name}</h5>
                    <h5>Description: {todo.description}</h5>
                    <div className='d-flex'>
                        <h5>Status:</h5>
                        <div className="dropdown">
                            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                {todo.status}
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><button className="btn btn-success dropdown-item">Completed</button></li>
                                <li><button className="btn btn-warning dropdown-item"></button></li>
                            </ul>
                        </div>
                    </div>
                    <div className='py-5'>
                        <button className="btn btn-primary me-2" onClick={() => handleEdit(todo.id)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards