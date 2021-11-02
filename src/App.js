import ProfilePage from "./pages/Profile/ProfilePage";
import { mockUsers, mockToDo } from './mockData';
import TodoPage from "./pages/Todo/TodoPage";

function App() {
  return (
    <div className="App">
        <TodoPage todos={mockToDo}/>
    </div>
    
    // <ProfilePage users={mockUsers}/>
  );
}

export default App;
