import './App.css';
import Display from './components/Display';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import CreatePet from './components/CreatePet';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <h1 className='margin-left'>Pet Shelter</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Display/>}/>
          <Route path='/pets/new' element={<CreatePet/>}/>
          <Route path='/pets/:id' element={<OnePet/>}/>
          <Route path='/pets/:id/edit' element={<EditPet/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
