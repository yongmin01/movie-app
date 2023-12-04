import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Movies from "./pages/Movies.jsx";
import TV from "./pages/TV";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import Login from "./pages/Login.jsx";
import { useState } from "react";
import NotFound from "./pages/NotFound.jsx";
import GlobalStyle from "./GlobalStyles.jsx";

function App() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header isLogined={login} setLogin={setLogin}></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={<Movies />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
          <Route path="/tv/*" element={<TV />} />
          <Route path="/person/*" element={<Celebrity />} />
          <Route
            path="/login/*"
            element={<Login isLogined={login} setLogin={setLogin} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
