import Navbar from './main/Nav';
import '../asset/App.scss';
import { BrowserRouter as Router, /*Route,*/ Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <div>
            <Navbar />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
