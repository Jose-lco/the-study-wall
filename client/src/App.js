import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';    
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { SignIn } from './components/SignIn';
import Wall from './components/Wall';
import Members from './components/Members';
import PrivateRoute from './components/PrivateRoute';
import { AuthContextProvider } from './contexts/AuthContext';
import { PostContextProvider } from './contexts/PostContext';
import Room from './components/Room';
function App() {
  return (
    <div className = "App">
      <AuthContextProvider>
        <PostContextProvider>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <PrivateRoute path = "/members" component = {Members} />
          <PrivateRoute path="/wall" component={Wall} />
          <Route path="/room/:roomID" component={Room} />
        </Switch>
      </Router>
      <Footer />
      </PostContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
