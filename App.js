import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Complexity from "./pages/Complexity";
import Esay from "./pages/Esay"
import Result from "./pages/Result";
import {QuizContext} from "./components/Context"
import { useState, useContext } from "react";

function App() {
  const [score, setScore] = useState(0)
  const [noscore, setNoscore] = useState(0)

  return (
    <div className="App">
      <Router>

        <QuizContext.Provider value={{score, setScore}}>

              <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/complexity" element={<Complexity />}/>
                    <Route path="/esay" element={<Esay />}/>
                    <Route path="/result" element={<Result />}/>
              </Routes>

          </QuizContext.Provider>

</Router>
    </div>
  );
}

export default App;
