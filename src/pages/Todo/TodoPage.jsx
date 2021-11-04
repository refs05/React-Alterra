import { Component } from "react";
import Content from "./components/Content";
import TodoInput from "./components/Input";
import Title from "./components/Title";
import style from './TodoPage.module.css';

class TodoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
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
        }
    }

    hapusTodo = (id) => {
        const newListTodo = this.state.data.filter((item) => item.id !== id)

        this.setState({data : newListTodo})
    }

    tambahTodo = (Todo) => {
        const newTodo = {id: this.state.data[this.state.data.length-1].id + 1, ...Todo}

        this.setState({data : [...this.state.data, newTodo]})
    }

    // gantiStatus = (id) => {
    //     const getStatus = this.state.data.find((item) => item.id === id);
    //     const newStatus = {...getStatus, completed: !getStatus.completed}

    //     this.setState({data : [...this.state.data, newStatus]})
    // }

    render() {
        return (
            <div className={style.wrapper}>
                <Title/>
                <TodoInput tambahTodo={this.tambahTodo}/>
                {this.state.data.map((item) => <Content key={item.id} item={item} hapusTodo={this.hapusTodo} gantiStatus={this.gantiStatus}/>)}
            </div>
        )
    }
}

export default TodoPage;