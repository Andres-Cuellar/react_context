import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

//context
import { TasksProvider } from "./context/TasksProvider";

function App() {

  return (
    <div className="container">
      <div className="row">
        <Header />
        <TasksProvider>
          <Form />
          <List />
        </TasksProvider>
      </div>
    </div>
  );
}

export default App;
