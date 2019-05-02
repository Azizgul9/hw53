import React from 'react';

const Task = props => (
    <div className={"TodoItem clearfix"}>
        <p>
            {props.text}
            <button onClick={props.delete} className={"del_btn"}>x</button>
        </p>
    </div>
);

export default Task;