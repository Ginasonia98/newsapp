import "./App.css";
import Home from "./page/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Home />
      </div>
    </AuthContextProvider>
  );
}

export default App;
