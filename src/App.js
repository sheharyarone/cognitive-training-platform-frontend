import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import HomeScreen from "./pages/HomeScreen";
import WhackAMole from "./games/WhackAMole";
import MemoryMatch from "./games/MemoryMatch";
import StatsScreen from "./pages/StatsScreen";

function App() {
  const isLoggedIn = window.localStorage.getItem("isLoggedIn");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn == "true" ? <HomeScreen /> : <LoginScreen />}
        ></Route>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/whackamole" element={<WhackAMole />} />
        <Route path="/memorymatch" element={<MemoryMatch />} />
        <Route path="/statsscreen" element={<StatsScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
