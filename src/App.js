import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Blog from './componentes/Inicio'
import AcercaDe from './componentes/AcercaDe'

const App = () => {
  return ( 
    <BrowserRouter>
      <div>
        <Header></Header>

        <main>
          <Route path="/" exact={true} component={Inicio}/>
          <Route path="/blog" exact={true} component={Blog}/>
          <Route path="/acercade" exact={true} component={AcercaDe}/>
        </main>
      </div>
    </BrowserRouter>
   );
}
 
export default App;