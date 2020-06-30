import React from 'react'
import CommentList from './CommentList'
import CommentFrom from './CommentFrom'
import './Comment.css'

class CommentBox extends
React.Component
{
    constructor(props){
        super(props)
        this.state={
            commentlist:
             [
    {name:'张三', date:'2009-09-20',comment:'这很棒1！！！'},
    {name:'赵六', date:'2009-09-20',comment:'这很棒2！！！'},
    {name:'李四', date:'2009-09-20',comment:'这很棒3！！！'},
    {name:'王五', date:'2009-09-20',comment:'这很棒4！！！'}
] 
        }
    }
    addComment(obj){
        console.log('这是传过来的对象',obj)
        // this.state.commentlist.push(obj)
        //props是只读状态
        // this.props.data = [...this.props.data,obj] 
        this.setState({
           commentlist:[...this.state.commentlist,obj] 
        })
        console.log(this.props.data)

    }
    render(){
       
        return(
            <div className = 'box'>
                <CommentList data={this.state.commentlist}/>
                <CommentFrom onAdd={this.addComment.bind(this)}/>   
            </div>
        )


    }

}
export{CommentBox as default }