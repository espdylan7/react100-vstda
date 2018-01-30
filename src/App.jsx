import React, { Component } from "react";
import List from "./List";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    let date = new Date();
    this.state = {
      comment: "",
      priority: "Low Priority",
      tasks: [],
      date: date
    };
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleChangePriority = this.handleChangePriority.bind(this);
    this.addItem = this.addItem.bind(this);
    // this.editTodoItem = this.editTodoItem.bind(this);
    this.saveTodoItem = this.saveTodoItem.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);

  }

  onClick(e){

  };

  handleChangeComment(e) {
    this.setState({ comment: e.target.value });
  };

  handleChangePriority(e) {
    this.setState({ priority: e.target.value });
  };

  deleteTodoItem(i, e) {
    e.preventDefault();
    this.props.onDelete(this.props.task)
  };
  

  saveTodoItem(e) {
    //when you onClick saveTodoItem button, 
    //should save the new state

    
  }
  addItem(e) {
    let tasks = [...this.state.tasks];
    let task = {
      date: new Date(),
      comment: this.state.comment,
      priority: this.state.priority
    };

    tasks.push(task);
    this.setState({
      tasks: tasks
    });
    this.state.comment = '';
  }

  render() {
        this.state.tasks.map((e) => {
        return (
          <Form tasks={e} delete={this.deleteTodoItem(e.target.i)} edit={this.editTodoItem} save={this.saveTodoItem}   />
        );
      });
    return (
      <div>
        <h5 id="h5-tag-1">Very Simple Todo App</h5>
        <h5 id="h5-tag-2">Track all things</h5>
        <hr id="line-1" className="col-sm-10" />
            <List
              date={this.state.date}
              comment={this.state.comment}
              handleChangeComment={this.handleChangeComment}
              priority={this.state.priority}
              handleChangePriority={this.handleChangePriority}
              edit={this.editTodoItem}
              save={this.saveTodoItem}
              addItem={this.addItem}
              tasks={this.state.tasks}
            />
        </div>
    );
  }
}

export default App;
