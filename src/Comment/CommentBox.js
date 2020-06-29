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
            commentlist:this.props.data
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