import { BrowserRouter, Routes, Route } from "react-router-dom";

import Question1 from "./Questions/Question1/Question1.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Q1" element={<Question1 />} />
        <Route
          path="/"
          element={
            <div className="container">
              <h1>Welcome React Question</h1>
              <p
                style={{
                  textAlign: "center",
                  marginTop: 18,
                  fontSize: "1.11rem",
                }}
              >
                This is your simple home page. Start managing your expenses
                efficiently and easily from here!
              </p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;