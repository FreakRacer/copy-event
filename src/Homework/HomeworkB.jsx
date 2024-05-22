import { useState } from "react"



function HomeworkB(){
const [todos, setTodos] = useState([
    {
        id: 1,
        text: 'js'
    },
    {
        id: 2,
        text: 'css'
    },
    {
        id: 3,
        text: 'html'
    },
    {
        id: 4,
        text: 'yellow'
    }


])
const [text, setText] = useState('')

const changeHandler = (e) =>{
    setText(e.target.value)
}
const handlerAdd = () => setText('') & setTodos([...todos, { text: text }])
//     setText('')
//     setTodos([
//         ...todos,
//         {
       
//         text: text
//     }])
// }

    return(
        <>
        <label htmlFor="in">text</label>
        <input placeholder="text" type="email" name="in" value={text} onChange={(e) => changeHandler(e)}/>
        <button onClick={handlerAdd}>add</button>
        {
            todos.map(todo =>{
                return (
                    <div key={todo.id}>{todo.text}</div>
                )
            })
        }
        </>
    )
}
export default HomeworkB