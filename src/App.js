import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import { Home } from './page/home'
import { Login } from './page/login'
import { Feed } from './page/feed'
import { Teste } from './page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
  );
}

export default App;
