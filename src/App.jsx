import NewTask from "./components/NewTask";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewTask />
    </main>
  );
}

export default App;
