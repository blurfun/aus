import { BrowserRouter, Switch, Route,Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
 

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import School from './pages/school/School'
import Students from './pages/students/Students'

// styles
import './App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route  path="/students">
            <Students />
          </Route>
          <Route  path="/schools/:id">
            <School />
          </Route>
        </Switch>
      </BrowserRouter>

      
    </div>
  );
}

export default App