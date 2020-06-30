import React from 'react';
import './App.css';
import CommentBox from './Comment/CommentBox' 
import Productslist from './Product/productlist'
import Nav from './Nav/Nav'
import {Route} from 'react-router-dom'
import About from "./About"
import Call from "./Call"

function App() {
//   let commentlist = [
//     {name:'张三', date:'2009-09-20',comment:'这很棒1！！！'},
//     {name:'赵六', date:'2009-09-20',comment:'这很棒2！！！'},
//     {name:'李四', date:'2009-09-20',comment:'这很棒3！！！'},
//     {name:'王五', date:'2009-09-20',comment:'这很棒4！！！'}
// ]     
  return (
    <div className="App">
      <Nav />
      <Route path="/Product" component={Productslist} />
      <Route path="/CommentList" component={CommentBox} />
      <Route path="/About" component={About} />
      <Route path="/Call" component={Call} />

    </div>
  );
}

export default App;
