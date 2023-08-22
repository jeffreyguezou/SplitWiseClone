import "./App.css";
import Dashboard from "./Components/Dashboard";
import LandingPage from "./Components/LandingPage";
import { useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="App">
      {!isLoggedIn && <LandingPage />}
      {isLoggedIn && <Dashboard />}
    </div>
  );
}

export default App;
