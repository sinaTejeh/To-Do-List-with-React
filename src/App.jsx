import { useState } from "react";

import NewTask from "./components/NewTask.jsx";
import NoTaskSelected from "./components/NoTaskSelected.jsx";
import Sidebar from "./components/Sidebar.jsx";
import SelectedTask from "./components/SelectedTask.jsx";

function App() {
  const [tasksState, setTasksState] = useState({
    selectedTaskId: undefined,
    tasks: []
  });

  const handleSelectTask = function (id) {
    setTasksState(prevTasks => {
      return {
        ...prevTasks,
        selectedTaskId: id,
      }
    });
  };

  const handleStartTask = function () {
    setTasksState(prevTasks => {
      return {
        ...prevTasks,
        selectedTaskId: null,
      }
    });
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

  const selectedTask = tasksState.tasks.find(task => task.id === tasksState.selectedTaskId);

  let content = <SelectedTask task={selectedTask} />;
  if (tasksState.selectedTaskId === null) {
    content = <NewTask onAdd={handleAddTask} onCancel={handleCancelTask} />
  } else if (tasksState.selectedTaskId === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartTask} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddTask={handleStartTask} tasks={tasksState.tasks} onSelectTask={handleSelectTask} selectedTaskId={tasksState.selectedTaskId} />
      {content}
    </main>
  );
}

export default App;
