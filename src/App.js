import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import AddLanguage from './components/AddLanguage';
import ListLanguage from './components/ListLanguage';

function App() {
  return (
    <div>
      <Router>
        <Header/>

        <div className="container">
          <Switch>
            <Route exact path="/" component={ListLanguage}></Route>
            <Route path="/languages" component={ListLanguage}></Route>
            <Route path="/add-language" component={AddLanguage}></Route>
            <Route path="/edit-language/:id" component={AddLanguage}></Route>
          </Switch>
        </div>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
