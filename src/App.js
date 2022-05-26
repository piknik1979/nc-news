import "./App.css";
import { Routes, Route } from "react-router-dom";
import Articles from "./components/Articles.jsx";
import Article from "./components/Article.jsx";
import Header from "./components/Header.jsx";
import Topics from "./components/Topics.jsx";
// import Users from "./components/Users.jsx";
import { createContext } from "react";

export const UserContext = createContext();
function App() {
  const user = "piknik";
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Header />
        <Topics />
        <main>
          <Routes>
            <Route path="/" element={<Articles />}></Route>
            <Route path="/articles" element={<Articles />}></Route>
            <Route path="/topics/:topic" element={<Articles />}></Route>
            <Route path="/articles/:article_id" element={<Article />}></Route>
            {/* <Route path="/users" element={<Users />}></Route> */}
          </Routes>
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
