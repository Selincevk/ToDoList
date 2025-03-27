import { useReducer } from "react";
import todoReducer from "../../reducer/todoReducer";
import actionTypes from "../../reducer/actionTypes";

const TodoList = () => {
  const initialState = {
    todos: [],
    isAdmin: false,
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const handleSubmit = (event) => {
    event.preventDefault(); // sayfa yenilenmesini engelle

    const text = event.target[0].value; // inputtaki değerlere eriş

    dispatch({ type:actionTypes.create, payload: text }); // reducerdaki actionları ilet.

    event.target.reset();
  };

  return (
    <div className="container p-4">
    <div className="d-flex justify-content-between align-items-center">
    <h1 className={`text-center fw-bold mb-3 ${state.isAdmin ? "admin-title" : ""}`}>
  {state.isAdmin ? "Admin Listesi" : "Kullanıcı Listesi"}
</h1>
    <button className="bg-secondary rounded-3" onClick={()=> dispatch({type: actionTypes.toggle})}>Yönetici Girişi</button>
    </div>
      {/* FORM  */}
      <form onSubmit={handleSubmit} className="d-flex gap-3">
        <input
          type="text"
          className="form-control"
          placeholder="Todo giriniz..."
        />
        <button className="btn btn-success px-4 fs-5">Ekle</button>
      </form>
      {/* TODO LİST */}

      <ul className="mt-5 list-group">
        {state.todos.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center mb-3 rounded "
          >
            <span> {item.text} </span>{" "}
            <button onClick={()=> dispatch({type:actionTypes.delete, payload:item.id})} className="btn btn-danger"> Sil </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
