import React, {Component} from 'react';

import './App.css';
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";

class App extends Component {
    state = {
        value: '',
        idGenerator: 3,
        tasks: [
            {text: "Wash the dishes", id: "1"},
            {text: "Do home assignments", id: "2"},
            {text: "Complete the book" , id: "3"},]
    };

    onChange=(event)=>{
      this.setState({value: event.target.value});
    };

    AddTask=()=> {
        let newTask={ text: this.state.value,id: this.state.idGenerator+1};
        let tasks = [...this.state.tasks,newTask];

        this.setState({tasks,value: '', idGenerator: this.state.idGenerator+1});
    };
    DelTask=(index)=>{
        let tasks=[...this.state.tasks];
        let id=this.state.tasks.findIndex(task=>task.id===index);
        tasks.splice(id,1);

        this.setState({tasks,idGenerator: this.state.idGenerator-1});
    };
    render() {
  return (
    <div className="App">
      <AddTaskForm
        value={this.state.value}
        tasks={this.state.tasks}
        add={this.AddTask}
        del={this.DelTask}
        change={this.onChange}
      />
    </div>
  );
    }
}

export default App;
