import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import HomeScreen from "./pages/HomeScreen";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
