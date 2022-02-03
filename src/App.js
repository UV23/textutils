import { useState } from "react/cjs/react.development";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <> 
    {/* <Route> */}
      <Navbar title="Textutils" aboutText="About Us" mode={darkMode} />
      <div className="container">
      <TextForm heading="Enter the text"/>       
      {/* <Switch>
          <Route path="/About">
            <About />
          </Route>
        </Switch> */}
      </div>
    {/* </Route> */}
    </>
  );
}

export default App;