import axios from "axios";

export const ADD_TO_DO = "ADD_TO_DO";
export const DELETE_TO_DO = "DELETE_TO_DO";
export const GET_TO_DO = "GET_TO_DO";

export const addToDo = todo => {
  return dispatch => {
    console.log("ha 7na");
    axios
      .post("http://127.0.0.1:5000/", { content: todo })
      .then(data => dispatch({ type: GET_TO_DO, data: data }));
  };
};

export const getToDos = () => {
  return dispatch => {
    axios
      .get("http://127.0.0.1:5000/")
      .then(data => dispatch({ type: GET_TO_DO, data: data }));
  };
};

export const deleteToDo = id => {
  return dispatch => {
    axios.delete("http://127.0.0.1:5000/", { data: { id } }).then(() => {
      dispatch({ type: DELETE_TO_DO, id });
    });
  };
};
