import React, { Component } from "react";

class List extends Component {
  constructor(props){
    super(props);
    this.state={
      tasks: this.props.tasks
    }
    this.editTodoItem = this.editTodoItem.bind(this);
  }

  editTodoItem(e) {
    let index = e.target.id;
    let task = [...this.props.tasks];
    console.log(task);
    task[index].editable = true;
   this.setState({
     task: task,
   })
  };

  render() {
    console.log("list state.tasks: " + this.state.tasks);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">
                <p id="h4-tag-1">Add New Todo</p>
              </div>
              <div className="card-body">
                <h5 className="card-title">I want to...</h5>
                <textarea
                  name={"comment-" + this.props.date}
                  className="create-todo-text card-text form-control"
                  defaultValue={this.props.comment}
                  onChange={this.props.handleChangeComment}
                />
                <h5>How much of a priority is this?</h5>
                <select
                  className="form-control"
                  name={"priority-" + this.props.date}
                  defaultValue={this.props.priority}
                  onChange={this.props.handleChangePriority}
                >
                  <option>Low Priority</option>
                  <option>Med Priority</option>
                  <option>High Priority</option>
                </select>
              </div>
              <div className="card-footer">
                <button
                  onClick={this.props.addItem}
                  className="btn btn-success btn-block"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-8" id="container-2">
            <div className="card" id="card-2">
              <div className="card-header">View Todos</div>
              {this.props.tasks.length === 0 && (
                <div>
                  <h4>Welcome To a Very Simple Todo App</h4>
                  <h6>
                    Get started now by adding a new todo item on the left.
                  </h6>
                </div>
              )}
              {this.props.tasks.length > 0 &&
                this.props.tasks.map((task, index) => {
                  
                  let priority = "";
                  if (task.priority == "Low Priority") {
                    priority = "alert alert-success";
                  } else if (task.priority == "Med Priority") {
                    priority = "alert alert-warning";
                  } else if (task.priority == "High Priority") {
                    priority = "alert alert-danger";
                  }

                  return (
                    <div key={index}>
                      {!!task.editable}

                      {!task.editable ? 
                      <div
                        key={"cardiB_" + task.date + "_" + index}
                        className={`card_ ${priority}`}
                      >
                        <div
                          key={"card_bodi" + task.date}
                          className="card-body"
                        >
                          <div key={task.priority}>
                            <p className={task.priority}>{task.comment} </p>
                            <i
                              className="fa fa-pencil-square-o"
                              id={index}
                              onClick={this.editTodoItem}
                              aria-hidden="true"
                            />
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            
                          </div>
                        </div>
                      </div>

                        :

                      <div
                              key={"card_" + task.date + "_" + index}
                              className={`card ${priority}`} >
                              
                              <div
                                key={"card_body_" + task.date}
                                className="card-body">

                                <div key={task.priority}>
                                  <input
                                    className={task.priority}
                                    defaultValue={task.comment}
                                    type="text"
                                  />

                                  <button
                                    onClick={this.save}
                                    type="button"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                      }

                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
