import './App.css';
import NavBar from "./components/navbar";
import TemplateCard from "./components/templateCard";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/profile';

function App() {
  return (
    <div className="App"> 

      
    
      <NavBar />  {/* Add nav-bar compenent */}   
      <TemplateCard /> {/* Add template-card component */}  
      <Profile /> {/* Add profile component */}


    </div>
  );
}

export default App;
