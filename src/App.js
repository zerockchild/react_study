import { useState } from "react";

function App() {
  const [toDo,setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setTodo("");
    setToDos(currentArray => [toDo, ...toDos]);
  }
  console.log(toDos);
  return (
    <div>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} 
      value={toDo} 
      type="text" 
      placeholder='Write your to do...' 
      />
      <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((element, idx) => <li key={idx}>{element}</li>)}
      </ul>
    </div>
  );
}

export default App;
