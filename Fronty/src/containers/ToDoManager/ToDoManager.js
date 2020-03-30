import React from "react";
import ToDo from "../../components/ToDo/ToDo";
import classes from "./ToDoManager.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class ToDoManager extends React.Component {
  componentDidMount() {
    this.props.getToDo();
    console.log(this.props);
  }

  state = {
    userToDo: ""
  };

  saveStuff = () => {
    this.props.postToDo(this.state.userToDo);
    this.setState({ userToDo: "" });
  };

  userInput = event => {
    this.setState({ userToDo: event.target.value });
  };

  render() {
    let Todos;
    if (this.props.todos !== []) {
      Todos = this.props.todos.map(el => (
        <ToDo
          key={el.id}
          content={el.content}
          delete={() => {
            this.props.deleteTodo(el.id);
          }}
        />
      ));
    } else {
      Todos = null;
    }

    return (
      <React.Fragment>
        <div className={classes.Container}>
          <h4>Your Todo's</h4>
          <div className={classes.ToDoContainer}>
            {Todos}
            <div className={classes.newTodo}>
              <input
                value={this.state.userToDo}
                onChange={this.userInput}
                className={classes.input}
                placeholder="write new todo"
              />
              <button
                onClick={this.saveStuff}
                className={classes.save}
                disabled={this.state.userToDo === ""}
              >
                Save U.U
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStoreToProps = store => {
  return { todos: store.todos };
};

const mapDispatchToProps = dispatch => {
  return {
    getToDo: () => dispatch(actions.getToDos()),
    deleteTodo: id => dispatch(actions.deleteToDo(id)),
    postToDo: todo => dispatch(actions.addToDo(todo))
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(ToDoManager);
