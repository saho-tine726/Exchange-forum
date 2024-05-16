import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from './styles/DefaultStyles';
import { Home } from "./components/Home";
import { CreatePost } from "./components/CreatePost";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { Nav } from "./components/Nav";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <GlobalStyles />
      <Nav isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
