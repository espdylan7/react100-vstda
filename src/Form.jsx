import React, { Component } from "react";

class Form extends Component {
  render() {
    const TodoAdd = (props) => {
      return (
        <li>
        <button onClick={props.delete}>x</button>
        <button id={props.id} onClick={props.edit}>Edit</button>
        </li>
   )
}
      // <div className="col-sm-8" id="container-2">
      //   <div className="card" id="card-2">
      //     <div className="card-header">View Todos</div>
      //     {this.props.tasks.length === 0 && (
      //       <div>
      //         <h4>Welcome To a Very Simple Todo App</h4>
      //         <h6>Get started now by adding a new todo item on the left.</h6>
      //       </div>
      //     )}
      //     {this.props.tasks.length > 0 &&
      //       this.props.tasks.map((task, index) => {
      //         console.log(task);
      //         let priority = "";
      //         if (task.priority == "Low Priority") {
      //           priority = "alert alert-success";
      //         } else if (task.priority == "Med Priority") {
      //           priority = "alert alert-warning";
      //         } else if (task.priority == "High Priority") {
      //           priority = "alert alert-danger";
      //         }
      //         return (
      //           <div
      //             key={"card_" + task.date + "_" + index}
      //             className={`card ${priority}`}
      //           >
      //             <div key={"card_body_" + task.date} className="card-body">
      //               <div key={task.priority}>
      //                 <p className={task.priority}>
      //                   {task.comment}{" "}
                        
                          
      //                       <i
      //                         onClick={this.props.editItem}
      //                         className="fa fa-pencil-square-o"
      //                         aria-hidden="true"
      //                       />
      //                 </p>
      //               </div>
      //             </div>
      //           </div>
      //         );
      //       })}
      //   </div>
      // </div>
  }
}

export default Form;
