import './App.css';
import React from 'react'
import NavBar from './component/NavBar/NavBar';
import Banner from './component/Banner/Banner';
import RowPost from './component/RowPost/RowPost';
import {originals, action, comedymovie, horror, romantic, Documentaries} from './Urls';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
    <RowPost Url={originals}  title={'Netflix Originals'}        />
    <RowPost Url={action}   title={'Action'}  isSmall={true}      /> 
    <RowPost Url={comedymovie}   title={'Comedy Movies'}  isSmall={true}      /> 
    <RowPost Url={romantic}   title={'Romantic'}  isSmall={true}      /> 
    <RowPost Url={horror}   title={'Horror'}  isSmall={true}      /> 
    <RowPost Url={Documentaries}   title={'Documentaries'}  isSmall={true}      /> 

    </div>
  );
}

export default App;
