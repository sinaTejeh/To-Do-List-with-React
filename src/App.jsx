import NewTask from "./components/NewTask";
import NoTaskSelected from "./components/NoTaskSelected";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NoTaskSelected />
    </main>
  );
}

export default App;
