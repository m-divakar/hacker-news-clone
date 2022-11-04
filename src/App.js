import "./styles/App.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import StoriesContainer from "./containers/StoriesContainer";
import JobContainer from "./containers/JobContainer";
import Navbar from "./components/Navbar";

const App = () => {
   const [sidebar, setSidebar] = useState(false);

   return (
      <div className="App">
         <Navbar sidebar={sidebar} setSidebar={setSidebar} />
         <Routes>
            <Route
               exact
               path="/"
               element={<StoriesContainer url={"topstories"} />}
            ></Route>
            <Route
               path="/newStories"
               element={<StoriesContainer url={"newstories"} />}
            ></Route>
            <Route
               path="/jobs"
               element={<JobContainer url={"jobstories"} />}
            ></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
         </Routes>
      </div>
   );
};

export default App;
