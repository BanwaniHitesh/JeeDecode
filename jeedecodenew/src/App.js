import LoginPage from './components/login';
import Signup from './components/signup';
import PhysicsDisplay from './components/physics';
import MathsDisplay from './components/maths';
import ChemistryDisplay from './components/chemistry';
import ProtectedRoute from './components/protectedRoute';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {



  return (
    <>
      <div style={{ backgroundColor: '#e0e0e0', height: '100%' }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
          </Routes>
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route exact path="/physics" element={<PhysicsDisplay />} />
              <Route exact path="/maths" element={<MathsDisplay />} />
              <Route exact path="/chemistry" element={<ChemistryDisplay />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
