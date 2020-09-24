import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';    
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { SignIn } from './components/SignIn';
import Wall from './components/Wall';
import Members from './components/Members';
//import SearchTopic from './components/SearchTopic';
import PrivateRoute from './components/PrivateRoute';
import { AuthContextProvider } from './contexts/AuthContext';
function App() {
  return (
    <div className = "App">
      <AuthContextProvider>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path = "/members" component = {Members} />
          <PrivateRoute path="/wall" component={Wall} />
          
        </Switch>
      </Router>
      <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
