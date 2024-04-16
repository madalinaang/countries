import React, { useState } from "react";
import "./styles/style.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/Details";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const changeDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  return (
    <HashRouter>
      <Header darkMode={darkMode} changeDarkMode={changeDarkMode} />
      <Routes>
        <Route path="/" element={<Main darkMode={darkMode} />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
