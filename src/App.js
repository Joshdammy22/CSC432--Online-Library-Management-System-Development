import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './Home';
import { ReadersRoute } from './ReadersRoute';
import { Books } from './Books';
import { MyBag } from './MyBag';
import { Returns } from './Returns';
function App() {
  return (
    <div className="font-sansita ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readers" element={<ReadersRoute />} />
          <Route path="/books" element={<Books />} />
          <Route path="/my-bag" element={<MyBag />} />
          <Route path="/returns" element={<Returns />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
