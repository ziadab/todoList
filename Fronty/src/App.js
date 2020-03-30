import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoManager from "./containers/ToDoManager/ToDoManager";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TodoManager />
    </React.Fragment>
  );
}

export default App;
