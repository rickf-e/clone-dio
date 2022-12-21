import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Home } from './page/home'
import { Login } from './page/login'
import { Feed } from './page/feed'
import { Teste } from './page'
import { Cadastro } from './page/cadastro'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/teste" element={<Teste />} />
        <Route path='/cadastro' element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
