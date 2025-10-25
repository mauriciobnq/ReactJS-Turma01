import React from 'react';
import './assets/css/base/base.css';
import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';

function App() {
  return (
    <Router>
     <Cabecalho />
     <Routes>
      < Routh path ="/" element={<Home/>} />
      < Routh path ="/sobre" element={<Sobre/>} />
      < Routh path ="/posts/:id" element={<Post/>} />
      < Routh path ="*" element={<Pagina404/>} />
     </Routes>
    </Router>
  );
}

export default App;