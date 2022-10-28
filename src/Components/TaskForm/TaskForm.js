import React from 'react';
import { useState } from 'react';


const TaskForm = () => {

    const [inputval, setInputval] = useState({});
    const [task , setTask] = useState([]);

    const handleAllInputFields = (event) =>{
        setInputval({...inputval, [event.target.name]: event.target.value});
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">
                                Task List
                            </span>
                            <div className="row">
                                <form id="task-form">
                                    <div className="input-field col s12">
                                        <input type="text" name="task" id="task" onChange={handleAllInputFields} />
                                        <label>new task</label>
                                    </div>
                                    <button className="waves-effect waves-light btn" type="submit" >Add Task</button>
                                </form>
                            </div>
                        </div>
                        <div className="card-action">
                            <h5 id="task-title">Tasks</h5>
                            <div className="input-field col s12">
                                <input type="text" name="filter" id="filter" onChange={handleAllInputFields}/>
                                <label>Filter Task</label>
                            </div>
                            <ul className="collection">
                                <li className="collection-item">asdasd<a className="delete-item secondary-content"><i className="fa fa-remove"></i></a></li>
                            </ul>
                            <a href="" className="clear-tasks btn black">Clear Task</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskForm;
