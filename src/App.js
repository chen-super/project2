import React from 'react';
import './App.css';
import CommentBox from './Comment/CommentBox' 
function App() {
  let commentlist = [
    {name:'张三', date:'2009-09-20',comment:'这很棒1！！！'},
    {name:'赵六', date:'2009-09-20',comment:'这很棒2！！！'},
    {name:'李四', date:'2009-09-20',comment:'这很棒3！！！'},
    {name:'王五', date:'2009-09-20',comment:'这很棒4！！！'}
]     
  return (
    <div className="App">
      <CommentBox data={commentlist}/>
    </div>
  );
}

export default App;
