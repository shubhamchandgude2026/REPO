// import { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Formik from "./components/formik";
import ShowAllUserCards from "./components/ShowAllUserCards";
import TestCompundPostCard from "./components/TestCompundPostCard";
import Mapper from "./components/Mapper";
function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Formik/>}/>
          <Route path="/users" element={<ShowAllUserCards/>} />
          <Route path="/test" element={<TestCompundPostCard/>} />
          <Route path="/mapper" element={<Mapper/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
