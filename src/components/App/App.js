
import './App.css';
import {useState} from "react";
import Form from "../../Form/Form";


function App() {
    const [todos, setTodos] = useState([])

    const putTodo = (value) => {
        if (value) {
            setTodos([...todos,{id: Date.now(), text: value, done: false}])
        } else {
            alert("ввудите текст!")
        }
    }

  return (
    <div className= "wrapper">
        <div className="Container">
            <h1 className = "title">TodoList</h1>
            <Form
                putTodo={putTodo}
            />
            <ul className="todos">
                {
                    todos.map(todo => {
                        return (
                            <li className="todo" key= {todo.id}>
                                {todo.text}
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    </div>
  );
}

export default App;
