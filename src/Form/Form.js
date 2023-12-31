import './Form.css'
import {useState} from "react";

const Form = (props) => {
    const [value, setValue] = useState("")
    return (
        <form onSubmit={e => {
            e.preventDefault();
            props.putTodo(value);
            setValue("")
        } }>
            <input type="Text" placeholder=" введите текст..." className="input" value={value} onChange={e=> setValue(e.target.value)} />
        </form>
    )
}
export default Form;