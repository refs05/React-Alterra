import style from './Content.module.css';
const Content = ({item, hapusTodo, gantiStatus}) => {    
    // const gantiStatus = () => console.log("check");
 
    return (
        <div className={style.todo}>
            <div style={{border: "1px solid black", height: "11px", width:"11px", alignSelf: "center", marginRight: "10px"}} onClick={() => {gantiStatus(item.id)}}>{(item.completed ? <img src="https://img.icons8.com/small/16/000000/filled-checked-checkbox.png" alt="check-icon"/> : '')}</div>
            <div style={{alignSelf: "center", flexGrow: "12"}} className={(item.completed ? style.completed : style.uncomplete)}>{item.title}</div>
            <button onClick={() => {hapusTodo(item.id)}} className={style.button}>Delete</button>
        </div>
    )
}
export default Content;

