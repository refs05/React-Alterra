
import { useState } from "react";
import Content from "./components/Content";
import TodoInput from "./components/Input";
import Title from "./components/Title";
import { NavbarHome} from "./Navbar";
import style from './TodoPage.module.css';

const initialValue =  [
    {
        id: 1,
        title: "Mengerjakan Exercise",
        completed: true
    },
    {
        id: 2,
        title: "Mengerjakan Assignment",
        completed: false
    }
]

function TodoPage () {
    const [data, setData] = useState(initialValue)

    const hapusTodo = (id) => {
        setData((oldData) => oldData.filter((item) => item.id !== id))

    }

    const tambahTodo = (Todo) => {
        const newTodo = {id: data[data.length-1].id + 1, ...Todo}

        setData((oldData) => [...oldData, newTodo])
    }

    const gantiStatus = (id) => {
        const newData = data.slice();
        const getStatus = newData.find((item) => item.id === id);
        const dataFinal =newData.filter((item) => item.id !== id)
        const newStatus = {...getStatus, completed: !getStatus.completed}
        dataFinal.push(newStatus);
        dataFinal.sort(function(a, b) { 
            return a.id - b.id;
          });
        
        setData(() => dataFinal)
    }

        return (
            <div className={style.wrapper}>
                <NavbarHome/>
                <Title/>
                <TodoInput tambahTodo={tambahTodo}/>
                {data.map((item) => <Content key={item.id} item={item} hapusTodo={hapusTodo} gantiStatus={gantiStatus}/>)}
            </div>
        )
}

export default TodoPage;