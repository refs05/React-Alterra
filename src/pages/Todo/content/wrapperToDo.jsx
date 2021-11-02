import Content from "./todoContent";

function WrapperToDo({data}) {
    return (
        <div className="wrapper">
            <Content title={data[0].title} status={data[0].completed}/>
            <Content title={data[1].title} status={data[1].completed}/>
            <Content title={data[2].title} status={data[2].completed}/>
            <Content title={data[3].title} status={data[3].completed}/>
        </div>
    );   
}

export default WrapperToDo;