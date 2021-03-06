import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home'
import Header from './components/Pages/Home/Header'
import Activity from './components/Pages/Activity/Activity';
import About from './components/Pages/About';
import FAQ from './components/Pages/FAQ';


import './App.css'
import './styles/style.scss'
import { TodosContext } from './TodoContext';

function App() {
  return (
    <Router>
      <TodosContext> 
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/activities" component={Activity} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
      </Switch>
      </TodosContext>
    </Router> 
  );
}

export default App;