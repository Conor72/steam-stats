import NavBar from "./components/navbar";
import TemplateCard from "./components/templateCard";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/profile';
import HomePage from './pages/homePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (

    <div className="App"> 

      
    
      <NavBar />  {/* Add nav-bar compenent */}   
      <TemplateCard /> {/* Add template-card component */}  

    <Router>
    <div className="jumbotron">
    <div className="container-fluid">
         
            <Routes>
            <Route path='/home' element={<HomePage/>} />      {/* path = URL path  element = Link to page */} 
            <Route path='/profile' element={<Profile/>} />
            </Routes>
            
       
        </div>
      </div>
      </Router>
      </div>
  );
};



export default App;
