import "./App.css";
import { Routes, Route } from "react-router-dom";
//import components
import Intro from "./components/Intro/Intro";
import SignIn from "./components/SignIn/SignIn";
import LogIn from "./components/Login/LogIn";
import AddTask from "./components/AddTask/AddTask";
import HomePage from "./components/HomePage/HomePage";
import TaskOpen from "./components/TaskOpen/TaskOpen";
import CreateTask from "./components/CreateTask/CreateTask";
//import { detail } from "./components/HomePage/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route element={<AddTask />}>
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/todo/:task" element={<TaskOpen />} />
        </Route>
        <Route path="createTask" element={<CreateTask />} />
      </Routes>
    </>
  );
}

export default App;
