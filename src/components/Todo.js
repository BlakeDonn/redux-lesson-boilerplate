import React from "react";
import { completeTask } from "../actions";
import { connect } from 'react-redux';

const ToDo = ({ completeTask, id, todo, completed }) => {
  return (
    <li
      className={completed ? "completed" : "not-completed"}
      onClick={()=> completeTask(id, todo)}
    >
      {todo}
    </li>
  );
};
const mapDispatchToProps = dispatch => ({
  completeTask: (id, todo) => dispatch( completeTask(id, todo) )
})

export default connect(null, mapDispatchToProps)(ToDo);

