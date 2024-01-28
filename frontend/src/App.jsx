import "./App.css";
import { Routes, Route } from "react-router-dom";
//import components
import Intro from "./components/Intro/Intro";
import SignIn from "./components/SignIn/SignIn";
import LogIn from "./components/Login/LogIn";
//import AddTask from "./components/AddTask/AddTask";
//import HomePage from "./components/HomePage/HomePage";
//import TaskOpen from "./components/TaskOpen/TaskOpen";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="logIn" element={<LogIn />} />
      </Routes>
      {/* <SignIn /> */}
      {/* <AddTask /> */}
      {/* <HomePage /> */}
      {/* <TaskOpen /> */}
    </>
  );
}

export default App;
