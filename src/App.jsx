import { useState } from "react";

import NewTask from "./components/NewTask";
import NoTaskSelected from "./components/NoTaskSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [tasksState, setTasksState] = useState({
    selectedTaskId: undefined,
    tasks: []
  });

  const handleStartTask = function () {
    setTasksState(prevTasks => {
      return {
        ...prevTasks,
        selectedTaskId: null,
      }
    })
  };

  let content;
  if (tasksState.selectedTaskId === null) {
    content = <NewTask />
  } else if (tasksState.selectedTaskId === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartTask} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddTask={handleStartTask} />
      {content}
    </main>
  );
}

export default App;
