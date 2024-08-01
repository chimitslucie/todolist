import TodoList from "./Components/ToDoList";

function App() {
  return (
    <div className="App">
      <div className="todoContent">
        <h1 className="todoContentTitle">To do list</h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App;
