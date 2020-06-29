import React from 'react'
import Comment from './Comment'

class CommentList extends
React.Component
{
    render(){
        let dataArr = this.props.data.map((item,index)=>{
            let {name,date,comment} = item;
           return <Comment key={index} name={name} date={date}>{comment} </Comment>     
        })
        return(
            <div className='list'>
                  {dataArr}          
            </div>
        )


    }

}
export {CommentList as default }