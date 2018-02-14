import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Blogs from './Components/Blogs'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './Layout'



class App extends Component {
  render() {
    return (
      <Layout>
      <MuiThemeProvider>
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props)=><Home {...props}/>}/>
        <Route exact path="/blogs" render={(props)=><Blogs {...props}/>}/>
        <Route exact path="/projects" render={(props)=><Projects {...props}/>}/>
        <Route exact path="/contact" render={(props)=><Contact {...props}/>}/>
      </Switch>
      </MuiThemeProvider>
      </Layout>
    );
  }
}

export default App;
