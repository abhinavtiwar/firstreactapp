
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Login from "./Components/Login";
import About from "./Components/About";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Chat from "./Components/Chat";
import Register from "./Components/Register";
import ManageUser from "./Components/ManageUser";
import Not from "./Components/Not";
import Event from "./Components/Event";
import Gallary from "./Components/Gallary";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
// import Not from "./Components/Not";

// import Card from "./Components/Card";
function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const mytheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#133c68",
      },
    },
  });

  const mytheme2 = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#133c68",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme ? mytheme2 : mytheme}>
        <BrowserRouter>
        <Header
            username={"abhinav"}
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
          ></Header>
         
          <Routes>
            <Route element={<Login />} path="loginpage" />
            <Route element={<About />} path="aboutpage" />

            <Route element={<Event />} path="eventpage" />
            <Route element={<Gallary />} path="gallary" />
            <Route element={<Product />} path="product" />
            <Route element={<Register />} path="register" />
            <Route element={<ManageUser />} path="manage" />
            <Route element={<Chat />} path="chat" />
            <Route element={<Not />} path="404" />
            {/* redirecting */}
            <Route element={<Navigate to="/loginpage" />} path="/" />
            <Route element={<Navigate to="/404" />} path="*" />
          </Routes>
         
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
