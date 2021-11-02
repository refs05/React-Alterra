import Navbar from './navbar/navbar';
import WrapperToDo from './content/wrapperToDo';

export default function TodoPage({todos}) {
    return (
        <>
            <Navbar />
            {/* {todos.map((todo) => <WrapperToDo todo={todo}/>)} */}
            <WrapperToDo data={todos}/>
        </>
    )
}