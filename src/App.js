import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProducts';
import Mpesa from './components/Mpesa';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
    <div className="App">
      <header className='App-header' >
        <h1 className='text-success'>Sokogarden-Buy and sell online </h1>
      
      </header>

      <nav  id='nav'className='m-4 btn bg-secondary'>

        <Link className='btn bg-dark m-3 text-white link' to='/'>GetProducts</Link>
        <Link className='btn bg-dark m-3 text-white link' to='/addproducts'>AddProducts</Link>
        <Link className='btn bg-dark m-3 text-white link' to='/signup'>SignUp</Link>
        <Link className='btn bg-dark m-3 text-white link' to='/signin'>SignIn</Link>
        
        


      </nav>






      <Routes>





      <Route path='/' element={ <GetProducts/>}/>
      <Route path='/addproducts' element={ <AddProducts/>}/>
      <Route path='/signup' element={ <SignUp/>}/>
      <Route path='/signin' element={ <SignIn/>}/>
      <Route path='/mpesa' element={ <Mpesa/>}/>





      </Routes>

      
         


    
      

      

        
      
      
    </div>
    </Router>
  );
}

export default App;
    
