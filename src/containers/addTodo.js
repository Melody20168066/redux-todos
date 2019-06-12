import React from "react";
import { connect } from "react-redux";
//import Header from "../components/header";
import { addTodo } from "../actions/index";
//import store from "../store/index";
class AddTodo extends React.Component {
  listChangeHandler = e => {
    if (e.keyCode === 13) {
      this.props.addTodo(e.target.value, false);
      e.target.value = "";
    }
  };
  render() {
    return (
      <header>
        <h1>Todos</h1>
        <input
          type="text"
          placeholder="What needs to be done?"
          onKeyDown={this.listChangeHandler}
        />
      </header>
    );
  }
}
const mapDispatchToProps = { addTodo };

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
