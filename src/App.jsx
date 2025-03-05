import { Routes, Route  } from "react-router-dom";
import HomeView from "Views/HomeView";


function App() {
  return (
    <Routes>
      <Route index element={<HomeView />} />
    </Routes>

  );
}

export default App;
