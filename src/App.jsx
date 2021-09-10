import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import ServiceEdit from './components/serviceEdit';
import ServiceList from './components/serviceList';

export default function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/services" />
            </Route>
            <Route path="/services" exact component={ServiceList} />
            <Route path="/services/:id" component={ServiceEdit} />
          </Switch>
      </Router>
    </div>
  );
}