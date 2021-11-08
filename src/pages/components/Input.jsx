import { useState } from "react/cjs/react.development";
import style from './Input.module.css';

function TodoInput(props) {
    const [data, setData] = useState({
        title: "",
    })

    const onChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handlerSubmit = e => {
        e.preventDefault()
        const formIsNotEmpty = data.title;
        if (formIsNotEmpty) {
            const newData = {
                title: data.title
            }

            props.tambahTodo(newData);
            setData({
                title: ""
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

        return (
            <div>
                <div onSubmit={() => {}} style={{textAlign: "center"}} className={style.wrapper}>
                    <div><input style={{width:"385px", height:"20px", borderRadius:"15px", padding:"5px"}} type="text" placeholder="Add todo..." value={data.title} name="title" onChange={onChange}/></div>

                    <div><button style={{position:"relative", left:"-60px", height:"34px", background: "none", border:"none", borderRadius:"15px"}} onClick={handlerSubmit}>Submit</button></div>
                </div>
            </div>
        )
}

export default TodoInput;