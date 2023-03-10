import { Fragment } from 'react';
import FirstComp from './components/firstComp'
import Props from './components/Props.js';
import State from './components/state'
import Estilos from './path/Estilos';
import Estilos2 from './path/Estilos2';
import Ref from './path/Ref';

const lista = ["Pera ", "Manzana ", "Uva "]

function App() {
  return ( 
    <Fragment>
      <State/>
      <Estilos/>
      <Estilos2/>
      <Ref/>
      {/* <FirstComp/> */}
      <br/>
      {/* <Props  */}
      {/* name = {lista}/> */}
      </Fragment>
  )
  
  
   
  
};

export default App;
