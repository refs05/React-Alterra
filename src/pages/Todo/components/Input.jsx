import { Component } from "react";
import style from './Input.module.css';

class TodoInput extends Component {
    state = {
        title: "",
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handlerSubmit = e => {
        e.preventDefault()
        const formIsNotEmpty = this.state.title;
        if (formIsNotEmpty) {
            const newData = {
                title: this.state.title
            }

            this.props.tambahTodo(newData);
            this.setState({
                title: ""
            })
        } else {
            alert("Data masih ada yang kosong")
        }
    }

    render() {
        return (
            <div>
                <div onSubmit={() => {}} style={{textAlign: "center"}} className={style.wrapper}>
                    <div><input style={{width:"390px", height:"20px", borderRadius:"15px", padding:"5px"}} type="text" placeholder="Add todo..." value={this.state.title} name="title" onChange={this.onChange}/></div>

                    <div><button style={{position:"relative", left:"-67px", height:"34px", background: "none", border:"none"}} onClick={this.handlerSubmit}>Submit</button></div>
                </div>
            </div>
        )
    }
}

export default TodoInput;