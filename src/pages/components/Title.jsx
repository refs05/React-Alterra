import style from './Title.module.css'
function Title() {
    return (
        <div style={{textAlign: "center", fontSize: "70px", fontWeight: "bold"}} className={style.gradient}><p>todos</p></div>
    )
}

export default Title;