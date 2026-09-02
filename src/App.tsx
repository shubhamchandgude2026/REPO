// import { useState } from 'react'
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Formik from "./components/formik";
import ShowAllUserCards from "./components/ShowAllUserCards";
import TestCompundPostCard from "./components/TestCompundPostCard";
import Mapper from "./components/Mapper";
import UserList from "./components/user/UserList";
import ErrorBoundary from "./components/common/ErrorBoundary";
import FormikForm from "./components/forms/FormikForm";

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <>
      <Router>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Formik />} />
            <Route path="/users" element={<ShowAllUserCards />} />
            <Route path="/test" element={<TestCompundPostCard />} />
            <Route path="/mapper" element={<Mapper />} />
            <Route path="/user-list" element={<UserList />} />
            <Route  path="/formik" element={<FormikForm/>}/>
          </Routes>
        </ErrorBoundary>
      </Router>
    </>
  );
}

export default App;
