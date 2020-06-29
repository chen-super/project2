import React from 'react'
class CommentFrom extends
React.Component
{
    //添加评论的方法
    addComment(){
      let name = this.refs.txtname.value 
      let conment = this.refs.txt.value
      let obj =  {name:name, date:(new Date()).toLocaleDateString(),comment:conment}
      console.log('点击的值',obj)
      this.props.onAdd(obj)
    }    
    render(){

        return(
            <div className='addForm'>
                <input type='text' ref='txtname' placeholder='名字' />
                <br/>
                <textarea
                ref='txt' 
                name='txt'
                col='30'
                row='3'>
                </textarea>
                <br/>
                <button onClick={this.addComment.bind(this)}>提交</button>
            </div>
        )


    }

}
export {CommentFrom as default }