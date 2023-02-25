import NavBar from './component/navBar'
import './App.css';
import React from "react";
import Movies from './component/movies';
import Costumers from './component/costumers';
import MovieForm from './component/movieForm';
import { Route,Routes } from "react-router-dom";
import Rentals from './component/rentals';
import NotFound from './component/common/notFound';


function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <main className='container'>
      <Routes>
            <Route path="/movies/:id" element={<MovieForm/>}></Route>
            <Route path="/movies" element={<Movies/>}></Route>
            <Route path="/costumers" element={<Costumers/>}></Route>
            <Route path="/rentals" element={<Rentals/>}></Route>
            <Route path="/not-found" element={<NotFound/>}/>
            <Route path="/" exact={true} element={<Movies/>}></Route>
            <Route path='*' to="/not-found/" element={<NotFound/>}/>
      </Routes>
     </main>
    </React.Fragment>
      
  );
}

export default App;
