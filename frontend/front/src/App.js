import { BrowserRouter,Routes,Route } from "react-router-dom";


import Display from "./componet/display";
import Home from "./componet/home";
import Insert from "./componet/insert";
import Stufees from "./componet/stufees";
import Stuinfo from "./componet/stuinfo";
import Stureult from "./componet/sturesult";
import Teacherdetail from "./componet/teacherdetail";
import Teachersallry from "./componet/teachersallary";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="stuinfo" element={<Stuinfo/>}/>
        <Route path="Sturesult" element={<Stureult/>}/>
        <Route path="Stufees" element={<Stufees/>}/>
        <Route path="teacherdetail" element={<Teacherdetail/>}/>
        <Route path="teachersallery" element={<Teachersallry/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="display" element={<Display/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
       </>
  );
}

export default App;
