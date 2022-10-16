import Sidebar from "./Components/Sidebar/Sidebar";

import Topbar from "./Components/Topbar/Topbar";
import './App.css'
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import Userpg from "./Pages/Userpg/Userpg";
import NewUsers from "./Pages/NewUsers/NewUsers";


function App() {
  return (
    <>
   <Topbar/>
   
   <div className={"container"}>
   <Sidebar/>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/Users" element={<UserList/>} />
      <Route path="/User/:userId" element={<Userpg/>} />
      <Route path="/NewUsers" element={<NewUsers/>} />
      </Routes>  
      </BrowserRouter>
     </div>
   </>
  );
}

export default App;