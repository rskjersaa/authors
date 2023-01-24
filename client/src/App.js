import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import DisplayList from './components/DisplayList';
import Form from './components/Form';
// import NavBar from './components/NavBar'
// import DisplayOne from './components/DisplayOne';
import UpdateForm from './components/UpdateForm';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
    <h1>Favorite Authors</h1>
      <BrowserRouter>
      {/* <NavBar/> */}
        <Routes>
          
          <Route path="/" element = {<DisplayList/>}/>
          <Route path="/new" element = {<Form/>}/>
          {/* <Route path="/products/:id" element = {<DisplayOne/>}/> */}
          <Route path="/edit/:id" element = {<UpdateForm/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
