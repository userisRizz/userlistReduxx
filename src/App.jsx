import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import UserList from "./UserList";
import ViewUser from "./ViewUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/view-user" element={<ViewUser />} />
      </Routes>
    </Router>
  );
}

export default App;
