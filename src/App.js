import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/Mainpage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route index element={<MainPage/>}/>
            <Route path='/about/:id' element={<AboutPage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
