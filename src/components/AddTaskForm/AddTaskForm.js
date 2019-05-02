import React from 'react';
import Task from "./Task/Task";

import './AddTaskForm.css';

const AddTaskForm = (props) => {
    let tasks = props.tasks.map((task, index) => (
        <Task
            key={index}
            text={task.text}
            delete={() => props.del(task.id)}
        />
    ));
    return (
        <div className={"TaskForm"}>
            <p>
                <input type="text" value={props.value} onChange={props.change}/>
                <button onClick={props.add} className={"add_btn"}>Add</button>
            </p>
            {tasks}
        </div>
    );

};

export default AddTaskForm;
