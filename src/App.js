import './App.css';
import Adduser from './components/Adduser';
import AllUsers from './components/AllUsers';
// import Code from './components/Code';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={AllUsers} />
      <Route exact path="/add" component={Adduser} />
      <Route exact path="/edit/:id" component={EditUser} />
      <Route component={Notfound}/>
      </Switch>
      {/* <Code/> */}
    </BrowserRouter>
  );
}

export default App;
