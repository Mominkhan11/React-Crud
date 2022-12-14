import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./component/Add";
import Edit from "./component/Edit";
import View from "./component/View";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add" element={<Add />} />
          <Route path="edit-user/:id" element={<Edit />} />
          <Route path="view-user/:id" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
