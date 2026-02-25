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

  const handleCancelTask = function () {
    setTasksState(prevTasks => {
      return {
        ...prevTasks,
        selectedTaskId: undefined
      }
    })
  };

  function handleAddTask(tasksData) {
    const taskId = Math.random()
    const newTask = {
      ...tasksData,
      id: taskId,
    }

    setTasksState(prevTasks => {
      return {
        ...prevTasks,
        selectedTaskId: undefined,
        tasks: [...prevTasks.tasks, newTask]
      }
    })
  };

  let content;
  if (tasksState.selectedTaskId === null) {
    content = <NewTask onAdd={handleAddTask} onCancel={handleCancelTask} />
  } else if (tasksState.selectedTaskId === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartTask} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddTask={handleStartTask} tasks={tasksState.tasks} />
      {content}
    </main>
  );
}

export default App;
