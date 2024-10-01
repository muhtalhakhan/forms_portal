import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./header";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";

export function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/form1">Form 1</Link>
            </li>
            <li>
              <Link to="/form2">Form 2</Link>
            </li>
            <li>
              <Link to="/form3">Form 3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
        </Routes>
      </div>
    </Router>
  );
}